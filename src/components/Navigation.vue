<template>
    <nav :class="{ 'nav-open': dropdown }" class="nav flex items-center justify-between flex-wrap bg-blue-dark p-6">
        <div class="flex items-center flex-no-shrink text-white mr-6">
            <font-awesome-icon size="lg" icon="shopping-cart" />
            <span class="ml-4 text-xl font-sans">Simple Shopping</span>
        </div>
        <div class="block lg:hidden">
            <button
                @click="dropdown = !dropdown"
                class="flex items-center px-3 py-2 border rounded text-blue-lighter border-blue-light hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button>
        </div>
        <div class="w-auto block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow"><!-- Links -->
                <router-link v-if="loggedIn" class="block mt-4 lg:inline-block lg:mt-0 text-blue-lighter hover:text-white mr-4" to="/">
                    Home
                </router-link>
                <router-link v-if="loggedIn" class="block mt-4 lg:inline-block lg:mt-0 text-blue-lighter hover:text-white mr-4" to="/shopping-lists">
                    Shopping Lists
                </router-link>
            </div>
            <div><!-- NavRight -->
                <router-link v-if="!loggedIn" class="block mt-4 lg:inline-block lg:mt-0 text-blue-lighter hover:text-white mr-4" to="/login">
                    Login
                </router-link>
                <a @click="logout" v-if="loggedIn" href="#" class="block mt-4 lg:inline-block lg:mt-0 text-blue-lighter hover:text-white mr-4">
                    Logout
                </a>
                <a
                    target="_blank"
                    href="https://github.com/jamesdordoy/shopping-list"
                    class="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue hover:bg-white mt-4 lg:mt-0">
                    View on GitHub
                </a>
            </div>
        </div>
    </nav>
</template>

<script>

import { auth } from '../firebase'

export default {
    data() {
        return {
            dropdown: false,
            loggedIn: false,
        }
    },
    created() {
        if (auth.currentUser) {
            this.loggedIn = true;
            this.currentUser = auth.currentUser.email;
        }
    },
    methods: {
        logout() {
            auth
            .signOut()
            .then(() => {
                this.$router.go({ path: this.$router.path });
            });
        }
    }
}

</script>
