import { writeFileSync } from 'fs'

import { faker } from '@faker-js/faker'

const personName = faker.person.fullName()

writeFileSync('index.ts', `export default '${personName}'`)
