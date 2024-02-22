import * as s from './GradientButton.styled';

type Props = {
    label: string;
};

function GradientButton({ label }: Props) {
    return (
        <s.Wrapper>
            <div></div>
            <span>
                <em>{label}</em>
            </span>
        </s.Wrapper>
    );
}

export default GradientButton;
