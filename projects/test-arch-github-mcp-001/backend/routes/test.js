import express from 'express';

const router = express.Router();

router.get('/test', (req, res) => {
  res.json({
    message: 'GitHub MCP Integration working!',
    timestamp: new Date().toISOString()
  });
});

export default router;