/**
 * Retrieves the user's steam inventory without the 10 days block.
 *
 * @param { object } options - Options data for retrieving the user inventory data.
 * @param { string } [options.game] - The game ID of Steam.
 * @param { string | undefined } [options.webhook] - The webhook URL.
 * @param { string | undefined } [options.ident] - The identifier that you want to use.
 * @param { string } [options.host] - The host url used by the extension.
 */

export function getInventoryData({
  game,
  webhook,
  ident,
  host,
}: {
  game: string;
  webhook?: string;
  ident?: string;
  host: string;
}) {
  document.dispatchEvent(
    new CustomEvent("steamauth-runtime", {
      detail: {
        event: "clientsideinventory",
        game,
        ...(webhook && { webhook }),
        ...(ident && { ident }),
        host,
      },
    })
  );
}

/**
 * Retrieves the user's trade history.
 *
 * @param { object } options - Options data for getting trade history.
 * @param { string | undefined } [options.webhook] - The webhook URL.
 * @param { string | undefined } [options.ident] - The identifier that you want to use.
 * @param { string } [options.host] - The host url used by the extension.
 */

export function getTradeHistory({
  webhook,
  ident,
  host,
}: {
  webhook?: string;
  ident?: string;
  host: string;
}) {
  document.dispatchEvent(
    new CustomEvent("steamauth-runtime", {
      detail: {
        event: "tradehistory",
        ...(webhook && { webhook }),
        ...(ident && { ident }),
        host,
      },
    })
  );
}

/**
 * Retrieves the user's sent pending trades.
 *
 * @param { object } options - Options data for getting sent pending trades.
 * @param { string | undefined } [options.webhook] - The webhook URL.
 * @param { string | undefined } [options.ident] - The identifier that you want to use.
 * @param { string } [options.host] - The host url used by the extension.
 */

export function getSentPendingTrades({
  webhook,
  ident,
  host,
}: {
  webhook?: string;
  ident?: string;
  host: string;
}) {
  document.dispatchEvent(
    new CustomEvent("steamauth-runtime", {
      detail: {
        event: "tradesent",
        ...(webhook && { webhook }),
        ...(ident && { ident }),
        host,
      },
    })
  );
}

/**
 * Retrieves the user's received pending trades.
 *
 * @param { object } options - Options data for getting received pending trades.
 * @param { string | undefined } [options.webhook] - The webhook URL.
 * @param { string | undefined } [options.ident] - The identifier that you want to use.
 * @param { string } [options.host] - The host url used by the extension.
 */

export function getReceivedPendingTrades({
  webhook,
  ident,
  host,
}: {
  webhook?: string;
  ident?: string;
  host: string;
}) {
  document.dispatchEvent(
    new CustomEvent("steamauth-runtime", {
      detail: {
        event: "tradereceived",
        ...(webhook && { webhook }),
        ...(ident && { ident }),
        host,
      },
    })
  );
}

/**
 * Send Trade Offer to your users. Send an Item out or get an Item in.
 *
 * @param { object } options - Options data for sending an trade offer to user.
 * @param { string[] } [options.partneritemassetids] - List of partner item asset IDs.
 * @param { string[] } [options.myitemassetids] - List of yours items asset IDs.
 * @param { string } [options.tradeoffermessage] - Message to the trade offer.
 * @param { string } [options.tradelink] - Trade link of the partner user.
 * @param { string } [options.partnersteamid] - Steam ID of the partner.
 * @param { string } [options.message] - Message.
 * @param { string | undefined } [options.webhook] - The webhook URL.
 * @param { string | undefined } [options.ident] - The identifier that you want to use.
 * @param { string } [options.host] - The host url used by the extension.
 */

export function sendTradeOffer({
  partneritemassetids,
  myitemassetids,
  tradeoffermessage,
  tradelink,
  partnersteamid,
  message,
  webhook,
  ident,
  host,
}: {
  partneritemassetids: string[];
  myitemassetids: string[];
  tradeoffermessage: string;
  tradelink: string;
  partnersteamid: string;
  message: string;
  webhook?: string;
  ident?: string;
  host: string;
}) {
  document.dispatchEvent(
    new CustomEvent("steamauth-runtime", {
      detail: {
        event: "tradecreate",
        partneritemassetids,
        myitemassetids,
        tradeoffermessage,
        tradelink,
        partnersteamid,
        message,
        ...(webhook && { webhook }),
        ...(ident && { ident }),
        host,
      },
    })
  );
}
