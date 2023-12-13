// Import necessary modules and libraries
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
client.login('MTE4NDQzNjA4MzY3MzU0NjgwNA.Gl9uTj.9n74Z49WvL7A8ZzUXbYIapkp2SpVt5gou23pik');

// Event handler for when the bot is ready
client.on(Events.ClientReady, () => {
	console.log(`${client.user.username} is online!`);
});