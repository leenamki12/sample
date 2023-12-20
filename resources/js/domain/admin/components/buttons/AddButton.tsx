import { Button } from '@/components/ui';

type Props = {
    onClick: () => void;
};

function AddButton({ onClick }: Props) {
    return (
        <Button
            label="추가"
            element="primary"
            type="submit"
            className="max-h-[40px] max-w-[100px]"
            onClick={onClick}
        />
    );
}

export default AddButton;
