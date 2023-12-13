// Import necessary modules and libraries
import 'dotenv/config';
import { Partials, Client, GatewayIntentBits, Events } from 'discord.js';

// Create a new Discord client instance
const client = new Client({
	partials: [Partials.Channel, Partials.Message],
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildVoiceStates,
		GatewayIntentBits.GuildMessageReactions,
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.GuildMessageTyping,
		GatewayIntentBits.DirectMessageTyping
	]
});

// Log in to Discord using the provided BOT_TOKEN
client.login(process.env.BOT_TOKEN);

// Event handler for when the bot is ready
client.on(Events.ClientReady, () => {
	console.log(`${client.user.username} is online!`);
});

client.on(Events.MessageCreate, async (message) => {

	// boop response
	if (message.content.toLowerCase() === 'beep') {
		// Reply with the initial message
		message.reply('boop');
	}

});