// src/repositories/GitHubRepository.ts
import { GitHubDataSource } from '../datasources/GitHubDataSource';

class GitHubRepository {
  private dataSource = new GitHubDataSource();

  async getUserRepos(username: string): Promise<any> {
    try {
      const response = await this.dataSource.getUserRepos(username);
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener los repositorios del usuario');
    }
  }
}

export default new GitHubRepository();
