import { $ as terminalProcess, fs } from 'zx'

import { faker } from '@faker-js/faker'

async function main () {
  const personName = faker.person.fullName()

  fs.writeFileSync('index.ts', `export default '${personName}'`)

  const packageJSON = fs.readJSONSync('package.json')
  const currentVersionSplit = packageJSON.version.split('.')
  currentVersionSplit[2] = (parseInt(currentVersionSplit[2]) + 1).toString()
  packageJSON.version = currentVersionSplit.join('.')

  fs.writeJSONSync('package.json', packageJSON, { spaces: 2 })

  await terminalProcess`git add .`
  await terminalProcess`git commit -m "Updated name to be ${personName}"`
  await terminalProcess`git push`

  process.exit(0)
}

main()
