// src/controllers/GitHubController.ts
import { Request, Response } from 'express';
import GitHubRepository from '../repositories/GitHubRepository';

class GitHubController {
  async getUserRepos(req: Request, res: Response) {
    const { username } = req.params;
    try {
      const repos = await GitHubRepository.getUserRepos(username);
      res.json(repos);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new GitHubController();
