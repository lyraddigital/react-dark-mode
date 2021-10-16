import { Flex } from 'components/Layout';

import style from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
    return (
        <Flex justifyContent="center" alignItems="center">
            <div id={ style.notFoundSection }>
                <h2>Not Found</h2>
                <p>We could not find the page you were looking for.</p>
            </div>
        </Flex>
    );
}