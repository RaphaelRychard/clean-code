// Nomenclatura de variáveis

const followerCategories = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getData(req, res) {
  const githubUsername = String(req.query.username)

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const githubUserResponse = await fetch(`https://api.github.com/users/${githubUsername}`);

  if (githubUserResponse.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUsername}" not found`
    })
  }

  const githubUserData = await githubUserResponse.json()

  const orderedFollowerCategories = followerCategories.sort((a, b) =>  b.followers - a.followers); 

  const userFollowerCategory = orderedFollowerCategories.find(category => githubUserData.followers > category.followers)

  const userCategoryResult = {
    github: githubUsername,
    category: userFollowerCategory?.title 
  }

  return userCategoryResult
}

getData({ query: {
  username: 'josepholiveira'
}}, {})