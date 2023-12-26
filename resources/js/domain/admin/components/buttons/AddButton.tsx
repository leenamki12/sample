import { Button } from '@/components/ui';

type Props = {
    label?: string;
    onClick: () => void;
};

function AddButton({ onClick, label = '등록' }: Props) {
    return (
        <Button
            label={label}
            element="primary"
            type="submit"
            className="max-h-[40px] max-w-[100px]"
            onClick={onClick}
        />
    );
}

export default AddButton;
