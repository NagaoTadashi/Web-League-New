<script setup lang="ts">
import {
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth'
import { useFirebaseAuth } from 'vuefire'
import { useRouter, useRoute } from 'vue-router'

const auth = useFirebaseAuth()!
const googleAuthProvider = new GoogleAuthProvider()

const router = useRouter()
const route = useRoute()

const error = ref(null)

function signinPopup() {
	signInWithPopup(auth, googleAuthProvider)
		.then(() => {
			if (typeof route.query.redirect === 'string') {
				router.push(route.query.redirect)
			}
		})
		.catch((reason) => {
			console.error('Failed sign', reason)
			error.value = reason
		})
}

definePageMeta({
	layout: false,
})
</script>

<template>
	<div>
		<button @click="signinPopup">
			Sign in with Google
		</button>
		<div v-if="error">
			{{ error }}
		</div>
	</div>
</template>
