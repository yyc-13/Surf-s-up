const { SlashCommandBuilder } = require('@discordjs/builders');

export default {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction: { reply: (arg0: string) => any; }) {
		await interaction.reply('Pong!');
	},
};