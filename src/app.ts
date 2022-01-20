import { APIController } from 'api-tools-ts';
import { SearchEngine } from 'more4less';

const api = new APIController('/api/v1');

api.AddEndPoint('/', 'get', (req, res) => {
    res.status(200).json({
        status: 'ok',
        message: 'This is the main endpoint. Please read the documentaion to understand how this api works! '
    });
});

api.AddEndPoint('/amazon', 'get', async (req, res) => {
    const { query } = req.query;
    const searchForQuery = await new SearchEngine('Amazon').search(query);

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
    const searchForQuery = await new SearchEngine('Ebay').search(query);

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
    const searchForQuery = await new SearchEngine('MediaMarkt').search(query);

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
    const searchForQuery = await new SearchEngine('Saturn').search(query);

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
    const searchForQuery = await new SearchEngine('Proshop').search(query);

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
    const searchForQuery = await new SearchEngine('Otto').search(query);

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
    const searchForQuery = await new SearchEngine('Alternate').search(query);

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

api.AddEndPoint('/kaufland', 'get', async (req, res) => {
    const { query } = req.query;
    const searchForQuery = await new SearchEngine('Kaufland').search(query);

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

api.AddEndPoint('/clevertronic', 'get', async (req, res) => {
    const { query } = req.query;
    const searchForQuery = await new SearchEngine('Clevertronic').search(query);

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
    const searchForQuery = await new SearchEngine('All').search(query);

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
