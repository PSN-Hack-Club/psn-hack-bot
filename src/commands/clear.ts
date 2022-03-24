import { Client, Message } from 'discord.js'

const execute = async (message: Message, args: any[], client: Client) => {
    if (!args[0] || typeof +args[0] !== 'number') return

    const permissions = message.member?.permissionsIn(message.channelId)
    if (
        permissions &&
        !permissions.has('ADMINISTRATOR') &&
        !permissions.has('MANAGE_MESSAGES')
    ) {
        return
    }

    const deleteCount = parseInt(args[0], 10)
    if (!deleteCount || deleteCount < 1 || deleteCount > 100) return

    if (message.channel.type === 'DM') return

    try {
        await message.channel.bulkDelete(deleteCount + 1)
    } catch (e) {
        console.error(e)
    }
}
export default {
    name: 'clear',
    execute,
}
