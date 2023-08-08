import * as S from './styles/Badge.styled';

type Props = {
    text: string;
    dot?: boolean;
    icon?: string;
} & S.Props;

export default function Badge({ dot, icon, text, variant }: Props) {
    return (
        <S.Badge variant={variant}>
            {dot && (
                <svg className="h-1.5 w-1.5 fill-red-400" viewBox="0 0 6 6" aria-hidden="true">
                    <circle cx={3} cy={3} r={3} />
                </svg>
            )}
            {icon && <img src={icon} alt={`${text} Icon`} />}
            <span>{text}</span>
        </S.Badge>
    );
}
