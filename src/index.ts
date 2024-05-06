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
 * @param { object } options - Options data for retrieving the user inventory data.
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
 * @param { object } options - Options data for retrieving the user inventory data.
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
 * @param { object } options - Options data for retrieving the user inventory data.
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
