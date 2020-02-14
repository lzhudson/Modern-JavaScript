class Github {
  constructor() {
    this.client_id = 'f875b11185cc0d0441b2';
    this.client_secret = 'e4f6a2d0cddfccf70c9779c1209111b0cf1d19d3';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}