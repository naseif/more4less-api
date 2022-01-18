import { APIController } from 'api-tools-ts';
import {
    AmazonPriceSearchEngine2,
    EbayPriceSearchEngine,
    MediaMarktPriceSearchEngine,
    SaturnPriceSearchEngine,
    OttoPriceSearchEngine,
    ProshopPriceSearchEngine,
    SearchEngineList,
    AlternatePriceSearchEngine
} from 'more4less';

const api = new APIController('/api/v1');

api.AddEndPoint('/', 'get', (req, res) => {
    res.status(200).json({
        status: 'ok',
        message: 'This is the main endpoint. Please read the documentaion to understand how this api works! '
    });
});

api.AddEndPoint('/amazon', 'get', async (req, res) => {
    const { query } = req.query;
    const searchForQuery = await new AmazonPriceSearchEngine2().search(query);

    try {
        res.status(200).json({
            status: 'ok',
            result: searchForQuery.length,
            data: searchForQuery
        });
    } catch (error: any) {
        res.status(500).json({ status: 'fail', error: error.message });
    }
});

api.AddEndPoint('/ebay', 'get', async (req, res) => {
    const { query } = req.query;
    const searchForQuery = await new EbayPriceSearchEngine().search(query);

    try {
        res.status(200).json({
            status: 'ok',
            result: searchForQuery.length,
            data: searchForQuery
        });
    } catch (error: any) {
        res.status(500).json({ status: 'fail', error: error.message });
    }
});

api.AddEndPoint('/mediamarkt', 'get', async (req, res) => {
    const { query } = req.query;
    const searchForQuery = await new MediaMarktPriceSearchEngine().search(query);

    try {
        res.status(200).json({
            status: 'ok',
            result: searchForQuery.length,
            data: searchForQuery
        });
    } catch (error: any) {
        res.status(500).json({ status: 'fail', error: error.message });
    }
});

api.AddEndPoint('/saturn', 'get', async (req, res) => {
    const { query } = req.query;
    const searchForQuery = await new SaturnPriceSearchEngine().search(query);

    try {
        res.status(200).json({
            status: 'ok',
            result: searchForQuery.length,
            data: searchForQuery
        });
    } catch (error: any) {
        res.status(500).json({ status: 'fail', error: error.message });
    }
});

api.AddEndPoint('/proshop', 'get', async (req, res) => {
    const { query } = req.query;
    const searchForQuery = await new ProshopPriceSearchEngine().search(query);

    try {
        res.status(200).json({
            status: 'ok',
            result: searchForQuery.length,
            data: searchForQuery
        });
    } catch (error: any) {
        res.status(500).json({ status: 'fail', error: error.message });
    }
});

api.AddEndPoint('/otto', 'get', async (req, res) => {
    const { query } = req.query;
    const searchForQuery = await new OttoPriceSearchEngine().search(query);

    try {
        res.status(200).json({
            status: 'ok',
            result: searchForQuery.length,
            data: searchForQuery
        });
    } catch (error: any) {
        res.status(500).json({ status: 'fail', error: error.message });
    }
});

api.AddEndPoint('/alternate', 'get', async (req, res) => {
    const { query } = req.query;
    const searchForQuery = await new AlternatePriceSearchEngine().search(query);

    try {
        res.status(200).json({
            status: 'ok',
            result: searchForQuery.length,
            data: searchForQuery
        });
    } catch (error: any) {
        res.status(500).json({ status: 'fail', error: error.message });
    }
});

api.AddEndPoint('/all', 'get', async (req, res) => {
    const { query } = req.query;
    const searchEngines = new SearchEngineList([
        new AmazonPriceSearchEngine2(),
        new EbayPriceSearchEngine(),
        new MediaMarktPriceSearchEngine(),
        new SaturnPriceSearchEngine(),
        new ProshopPriceSearchEngine(),
        new OttoPriceSearchEngine(),
        new AlternatePriceSearchEngine()
    ]);

    const searchForQuery = await searchEngines.search(query);

    try {
        res.status(200).json({
            status: 'ok',
            result: searchForQuery.length,
            data: searchForQuery
        });
    } catch (error: any) {
        res.status(500).json({ status: 'fail', error: error.message });
    }
});

api.port = 8080;

api.startServer({ useDefaultMiddlewares: 'true' });
