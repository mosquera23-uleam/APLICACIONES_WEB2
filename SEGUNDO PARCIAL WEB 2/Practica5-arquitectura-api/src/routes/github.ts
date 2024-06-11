// src/routes/github.ts
import { Router } from 'express';
import GitHubController from '../controllers/GitHubController';

const router = Router();

router.get('/:username/repos', GitHubController.getUserRepos);

export default router;
