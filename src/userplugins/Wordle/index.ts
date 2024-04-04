/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

// import { findGroupChildrenByChildId } from "@api/ContextMenu";
import { ApplicationCommandInputType, ApplicationCommandOptionType, sendBotMessage } from "@api/Commands";
import definePlugin from "@utils/types";
import { addChatBarButton, removeChatBarButton } from "@api/ChatButtons";
import { WordleChatBarIcon } from "./WordleIcon";

export default definePlugin({
    name: "Wordle",
    description: "Access Wordle directly from Discord",
    authors: [
        {
            id: 369119814637322240n,
            name: "equationslayer12",
        },
        {
            id: 301976310501212161n,
            name: "ikappyyyy"
        }
    ],
    dependencies: ["CommandsAPI"],
    commands: [
        {
            name: "test",
            description: "this command violates discord's TOS..",
            inputType: ApplicationCommandInputType.BUILT_IN,
            options: [
                {
                    name: "test",
                    description: "this command violates discord's TOS",
                    type: ApplicationCommandOptionType.STRING,
                    required: true
                },
            ],
            execute: async (_, ctx) => {
                sendBotMessage(ctx.channel.id, { content: "STOP DISTURBING ME LOL" });
            }
        }
    ],

    patches: [],
    // Delete these two below if you are only using code patches
    start() {
        addChatBarButton("vc-wordle", WordleChatBarIcon);
        restartNeeded: true;
    },
    stop() {
        removeChatBarButton("vc-wordle");
        restartNeeded: true;
    },
});
