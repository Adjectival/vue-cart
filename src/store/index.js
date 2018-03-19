import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// app starts with these =aka= initial state
const state = {
    added: [],
    all: [
        {
            id: 'mo6dy4uyrfzp',
            name: 'Ether',
            description: 'Restores 50 Magic Points. Tastes like spearmint.',
            price: 500
        },
        {
            id: '3x9xk0xid7le',
            name: 'Glass Helmet',
            description: 'Purely decorative headgear, modeled on actual parade armor. Intended for display indoors.',
            price: 22000
        },
        {
            id: '13rumtpz0y0y',
            name: 'Steel Bucket',
            description: 'Very useful, can carry liquids or trap small creatures.',
            price: 800
        },
        {
            id: 'jwt9yhkqe1q0',
            name: 'Junior Archery Set',
            description: 'Designed for inexperienced bowpersons, requires only 10 eeks of draw strength. Comes with rubber safety arrows',
            price: 8000
        },
    ]
}




// state mutations allowed in store
const mutations = {

    [types.ADD_TO_CART] (state, { id }) {
        const record = state.added.find(p => p.id === id)

        if (!record) {
            state.added.push({
                id,
                quantity: 1
            })
        } else {
            record.quantity++
        }

    }

}

// store for App products inventory
export default new Vuex.Store({
    state,
    strict: debug,
    mutations,
    getters,
    setters
})
