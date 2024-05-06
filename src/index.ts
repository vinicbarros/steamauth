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
        webhook,
        ident,
        host,
      },
    })
  );
}

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
        webhook,
        ident,
        host,
      },
    })
  );
}

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
        webhook,
        ident,
        host,
      },
    })
  );
}

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
        webhook,
        ident,
        host,
      },
    })
  );
}
