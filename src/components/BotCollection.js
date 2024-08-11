import React from "react";
import BotCard from "./BotCard";

function BotCollection({ botCollection, action, removeCard }) {
    return (
        <div className="ui four column grid">
            <div className="row">
                {botCollection && botCollection.map((bot) => {
                    return <BotCard key={bot.id} bot={bot} action={action} removeCard={removeCard} />
                })}
            </div>
        </div>
    );
}

export default BotCollection;
