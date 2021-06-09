import * as S from './styles'

const Main = ({
    title = 'Nathanael',
    description = 'Boilerplate em Next + styled'
}) => (
    <S.Wrapper>
        <S.Logo
            src="img/logo.svg"
            alt="Logo: Imagem de um átomo e react avançado"
        />
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Illustration
            src="img/hero-illustration.svg"
            alt="Desenvolvedor codificando em frente a um computador."
        />
    </S.Wrapper>
)
export default Main
