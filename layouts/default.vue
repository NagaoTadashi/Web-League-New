<script setup lang="ts">
import { useDisplay } from 'vuetify'

const menues = [
	{
		icon: 'mdi-soccer-field',
		title: '試合日程・結果',
		value: 'matchList',
		to: '/',
	},
	{
		icon: 'mdi-tshirt-crew',
		title: 'チーム情報',
		value: 'teamInfo',
		to: '/TeamInfo/',
	},
	// {
	// 	icon: 'mdi-account-group',
	// 	title: '選手一覧',
	// 	value: 'playerList',
	// 	to: '/PlayerList/',
	// },
	{
		icon: 'mdi-text-box-outline',
		title: '対戦相手を募集',
		value: 'requirementOpponent',
		to: '/RequirementOpponent/',
	},
	{
		icon: 'mdi-email',
		title: '申し込み依頼',
		value: 'applicationRequest',
		to: '/ApplicationRequest/',
	},
	{
		icon: 'mdi-account-search',
		title: '対戦相手を探す',
		value: 'findOpponent',
		to: '/FindOpponent/',
	},
	{
		icon: 'mdi-progress-check',
		title: '申し込み状況',
		value: 'applicationStatus',
		to: '/ApplicationStatus/',
	},
]

const xsMenues = [
	{
		icon: 'mdi-soccer-field',
		title: '試合日程・結果',
		value: 'matchList',
		to: '/',
	},
	{
		icon: 'mdi-tshirt-crew',
		title: 'チーム情報',
		value: 'teamInfo',
		to: '/TeamInfo/',
	},
	// {
	// 	icon: 'mdi-account-group',
	// 	title: '選手一覧',
	// 	value: 'playerList',
	// 	to: '/PlayerList/',
	// },
	{
		icon: 'mdi-text-box-outline',
		title: '対戦相手を募集',
		value: 'requirementOpponent',
		to: '/RequirementOpponent/',
	},
	{
		icon: 'mdi-account-search',
		title: '対戦相手を探す',
		value: 'findOpponent',
		to: '/FindOpponent/',
	},
]

const { smAndUp } = useDisplay()
</script>

<template>
	<v-app>
		<!-- PC・タブレット用 -->

		<template v-if="smAndUp">
			<v-app-bar
				:elevation="5"
				rounded
			>
				<v-app-bar-title>
					<img
						src="../public/web_league_logo.svg"
						width="30"
						height="30"
						style="vertical-align: middle"
					>
					Web League
				</v-app-bar-title>
				<v-spacer />

				<v-menu location="bottom">
					<template #activator="{ props }">
						<v-btn
							v-tooltip:bottom="'問い合わせ'"
							v-bind="props"
							class="text-none"
							stacked
						>
							<v-icon>mdi-message-question-outline</v-icon>
						</v-btn>
					</template>
					<v-list>
						<v-list-item class="d-flex justify-center">
							<a
								href="https://x.com/web_league_0508"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="../public/icons8-ツイッターx.svg"
									width="35"
									height="35"
								>
							</a>
						</v-list-item>

						<v-list-item class="d-flex justify-center">
							<a
								href="https://www.instagram.com/web.league/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="../public/icons8-インスタグラム.svg"
									width="35"
									height="35"
								>
							</a>
						</v-list-item>
					</v-list>
				</v-menu>

				<!-- <v-btn
					v-tooltip:bottom="'ログアウト'"
					class="text-none"
					stacked
					@click="handleSignOut"
				>
					<v-icon>mdi-logout</v-icon>
				</v-btn> -->
			</v-app-bar>

			<v-navigation-drawer
				rounded
				floating
				permanent
				width="225"
			>
				<v-list nav>
					<v-list-item
						v-for="(menue, index) in menues"
						:key="index"
						:link="true"
						:to="menue.to"
						:prepend-icon="menue.icon"
						:title="menue.title"
					/>
				</v-list>
			</v-navigation-drawer>
		</template>

		<!-- スマホ用 -->

		<template v-else>
			<v-app-bar
				:elevation="5"
				rounded
			>
				<v-app-bar-title>
					<img
						src="../public/web_league_logo.svg"
						width="30"
						height="30"
						style="vertical-align: middle"
					>
					Web League
				</v-app-bar-title>

				<!-- 問い合わせボタン -->
				<v-menu location="bottom">
					<template #activator="{ props }">
						<v-btn
							v-bind="props"
							class="text-none"
							stacked
						>
							<v-icon>mdi-message-question-outline</v-icon>
						</v-btn>
					</template>
					<v-list>
						<v-list-item class="d-flex justify-center">
							<a
								href="https://x.com/web_league_0508"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="../public/icons8-ツイッターx.svg"
									width="35"
									height="35"
								>
							</a>
						</v-list-item>

						<v-list-item class="d-flex justify-center">
							<a
								href="https://www.instagram.com/web.league/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="../public/icons8-インスタグラム.svg"
									width="35"
									height="35"
								>
							</a>
						</v-list-item>
					</v-list>
				</v-menu>

				<!-- ログアウトボタン
				<v-btn
					class="text-none"
					stacked
					@click="handleSignOut"
				>
					<v-icon>mdi-logout</v-icon>
				</v-btn> -->
			</v-app-bar>

			<!-- ボトムナビゲーション -->
			<v-bottom-navigation
				:elevation="5"
				rounded
			>
				<v-btn
					v-for="menu in xsMenues"
					:key="menu.value"
					:value="menu.value"
					:to="menu.to"
				>
					<v-icon>{{ menu.icon }}</v-icon>
				</v-btn>
			</v-bottom-navigation>
		</template>

		<v-main>
			<v-container>
				<slot />
			</v-container>
		</v-main>
	</v-app>
</template>
