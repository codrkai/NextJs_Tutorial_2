export default function handler(req, res) {
    if (req.method === 'POST') {
        const formBody = req.body;

        res.status(200).json({id: `${formBody.id}`, title: `${formBody.title}`});
    }
}