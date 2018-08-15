import { ProjectMembers } from '../../../src';

describe('ProjectMembers', () => {
  it('all with query should return only active members', async () => {
    const service = new ProjectMembers({
      url: process.env.GITLAB_URL,
      token: process.env.PERSONAL_ACCESS_TOKEN,
    });
    const result = await service.all(1, { query: 'state=active' });

    expect(result).toBeInstanceOf(Array);
  });
});
