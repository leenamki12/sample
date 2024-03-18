import { PropsWithChildren, useEffect, useState } from 'react';

import { NotificationOutlined, QuestionCircleOutlined, PictureOutlined } from '@ant-design/icons';
import { router } from '@inertiajs/react';
import { ConfigProvider, Layout, Menu, Typography } from 'antd';
import { Content, Footer } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import tw, { styled } from 'twin.macro';

import { useHeader } from '../AppLayout';

export const Wrapper = styled.div`
    ${tw`h-full min-h-screen`}
`;

type MenuItem = {
    label: React.ReactNode;
    key: React.Key;
    icon?: React.ReactNode;
    children?: MenuItem[];
};

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

interface MenuItemData {
    key: React.Key;
    icon?: React.ReactNode;
    label: React.ReactNode;
    children?: MenuItemData[]; // Children 속성 추가
}

const items: MenuItem[] = [
    getItem('공지사항 관리', '1', <NotificationOutlined />, [
        getItem('공지사항 목록', '1.1'),
        getItem('공지사항 등록', '1.2'),
    ]),
    getItem('FAQ 관리', '2', <QuestionCircleOutlined />, [
        getItem('FAQ 목록', '2.1'),
        getItem('FAQ 등록', '2.2'),
    ]),
    getItem('GALLERY 관리', '3', <PictureOutlined />, [
        getItem('GALLERY 목록', '3.1'),
        getItem('GALLERY 등록', '3.2'),
    ]),
];

function AdminLayout({ children }: PropsWithChildren) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState<string>('1.1');

    const { pageTitle } = useHeader();

    const findSelectedItem = (items: any[]): MenuItemData | undefined => {
        for (const item of items) {
            if (item.key === selectedMenu) return item;
            if (item.children) {
                const selectedItem = findSelectedItem(item.children);
                if (selectedItem) return selectedItem;
            }
        }
        return undefined;
    };

    const handleMenuClick = (e: any) => {
        setSelectedMenu(e.key);
        switch (e.key) {
            case '1.1':
                router.visit(route('admin.notice.index'));
                break;
            case '1.2':
                router.visit(route('admin.notice.create'));
                break;
            case '2.1':
                router.visit(route('admin.faq.index'));
                break;
            case '2.2':
                router.visit(route('admin.faq.create'));
                break;
            case '3.1':
                router.visit(route('admin.gallery.index'));
                break;
            case '3.2':
                router.visit(route('admin.gallery.create'));
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        items.filter(item => {
            if (item.children) {
                const foundItem = item.children.find(child => child.label === pageTitle);
                if (foundItem) {
                    setSelectedMenu(foundItem.key as string);
                    return false;
                }
            }
            return false;
        });
    }, [pageTitle]);

    return (
        <ConfigProvider
            theme={{
                token: {
                    fontFamily: 'NanumSquareNeo',
                },
            }}
        >
            <Layout style={{ minHeight: '100vh', position: 'sticky' }}>
                <Sider
                    collapsible
                    collapsed={isCollapsed}
                    onCollapse={value => setIsCollapsed(value)}
                >
                    <div className="mt-[10px] border-b-[1px] border-[#2d303d] py-[20px] text-center">
                        <Typography.Title level={1} className="!mb-0 !text-[18px] !text-white">
                            {isCollapsed ? 'THE GLOW' : 'THE GLOW 관리자'}
                        </Typography.Title>
                    </div>
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={['2.1']}
                        selectedKeys={[selectedMenu]}
                        mode="inline"
                        items={items}
                        onClick={e => {
                            handleMenuClick(e);
                        }}
                    />
                </Sider>
                <Layout>
                    <Content style={{ margin: '0 24px' }}>
                        <div className="pt-[30px]">
                            <Typography.Title level={2}>{pageTitle}</Typography.Title>
                        </div>
                        <div>{children}</div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        ©{new Date().getFullYear()} Created by withbrother
                    </Footer>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
}

export default AdminLayout;
