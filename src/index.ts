import { MikroORM } from '@mikro-orm/core'
import { __prod__ } from './constants'
import { Post } from './entities/Post'


const main = async () => {
    const orm = await MikroORM.init({
        entities: [Post],
        dbName: 'mySocial',
        type: 'postgresql',
        debug: !__prod__,
    })

   const post = orm.em.create(Post, {title: 'my first post'})
    orm.em.persistAndFlush(post)
}

main()