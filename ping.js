module.exports = {
    name: "ping",
    description: "Respond by Pong",
    execute(message, args){
        message.channel.send("Pong !");
    }
}