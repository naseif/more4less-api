import { IEndpoint } from '../../types/IEndpoint';

export const home: IEndpoint = {
    endpoint: '/',
    method: 'get',
    callback: async (req, res) => {
        try {
            res.status(200).json({
                status: 'ok',
                message: 'This is the main endpoint. Please read the documentaion to understand how this api works! '
            });
        } catch (error: any) {
            res.status(500).json({ status: 'fail', error: error.message });
        }
    }
};
