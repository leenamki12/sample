import { PropsWithChildren, useState } from 'react';

import { router } from '@inertiajs/react';
import { NotificationOutlined, QuestionCircleOutlined, PictureOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps, theme } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`h-full min-h-screen`}
`;
type MenuItem = Required<MenuProps>['items'][number];

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
    const [collapsed, setCollapsed] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState<string>('1.1');

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

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
                // 갤러리 목록
                break;
            case '3.2':
                // 갤러리 등록
                break;
            default:
                break;
        }
    };

    return (
        <Layout style={{ minHeight: '100vh', position: 'sticky' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['1.1']}
                    selectedKeys={[selectedMenu]}
                    mode="inline"
                    items={items}
                    onClick={e => {
                        handleMenuClick(e);
                    }}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '0 16px' }}>
                    <div style={{ fontSize: '30px' }}>
                        <b>{findSelectedItem(items).label}</b>
                    </div>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                        className="h-[4000px]"
                    >
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
}

export default AdminLayout;
