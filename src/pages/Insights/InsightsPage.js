import { Flex } from 'components/Layout';

import { insights } from 'core/insights';
import { InsightTile } from "components/Insights";

import style from './InsightsPage.module.scss';

export const InsightsPage = () => {
    const insightEls = insights.map((insight, i) => (
        <InsightTile
            key={i}
            title={insight?.title}
            subTitle={insight?.subTitle}
            insight={insight?.insight} />
    ));

    return (
        <Flex justifyContent="center" alignItems="start">
            <div id={ style.insightsGrid }>
                { insightEls } 
            </div>         
        </Flex>
    );
}