import { screen, render } from '@testing-library/react'

import Main from './index'

describe('Start testing Main Component', () => {
    it('Should render heading', () => {
        const { container } = render(<Main />)

        expect(
            screen.getByRole('heading', { name: /Nathanael/i })
        ).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })

    it('should render the colors correctly', () => {
        const { container } = render(<Main />)

        expect(container.firstChild).toHaveStyle({
            'background-color': '#06092b'
        })
    })
})
