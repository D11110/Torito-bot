const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Aber'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
