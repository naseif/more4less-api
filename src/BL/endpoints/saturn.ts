import { SearchEngineFactory } from 'more4less';
import { IEndpoint } from '../../types/IEndpoint';

export const saturn: IEndpoint = {
    endpoint: '/saturn',
    method: 'get',
    callback: async (req, res) => {
        const { query } = req.query;
        const searchForQuery = await new SearchEngineFactory().GetSearchEngine('Saturn').search(query);

        try {
            res.status(200).json({
                status: 'ok',
                result: searchForQuery.length,
                data: searchForQuery
            });
        } catch (error: any) {
            res.status(500).json({ status: 'fail', error: error.message });
        }
    }
};
