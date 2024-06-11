// src/datasources/GitHubDataSource.ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { GITHUB_TOKEN } from '../config';

export class GitHubDataSource {
  private baseUrl = 'https://api.github.com';

  private getHeaders(): AxiosRequestConfig {
    return {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/json',
      },
    };
  }

  async getUserRepos(username: string): Promise<AxiosResponse> {
    const url = `${this.baseUrl}/users/${username}/repos`;
    const config = this.getHeaders();
    return await axios.get(url, config);
  }
}
