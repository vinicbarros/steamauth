# SteamAuth Extension

Steamauth shares your Steamdata with third party websites securely.
It can shares your Inventory and Tradingdata.

This package serves to facilitate the use of triggers for the extension, and is supported by the [SteamAuth extension](https://steamauth.app).

## Installation

```bash
npm install steamauth-extension
```

## Usage

First of all, you or your users need to install the SteamAuth Extension. You can download it from this [link](https://steamauth.app). After downloading the extension, you can start using it by following the steps in the documentation.

**Note**: The Extension pass the data into your Backend. For that, you need to setup an Webhook Url under: www.steamwebapi.com. **Please contact us for more information for setting up the Webhook Url under Discord.
Feedback from the Extension you can see in the console too.**

### Inventory Data

This function returns the user's steam inventory.

```typescript
import { getInventoryData } from "steamauth-extension";

export default function App() {
  return (
    <button
      onClick={() =>
        getInventoryData({
          game: "730",
          webhook: "https://your-webhook-url.com - not required",
          ident: "custom-ident-for-example-username-or-userid - not required",
          host: "your-host.com setting up under steamwebapi.com",
        })
      }
    >
      Get Trade History
    </button>
  );
}
```

### Trade History

This function returns all the finished trades of the user.

```typescript
import { getTradeHistory } from "steamauth-extension";

export default function App() {
  return (
    <button
      onClick={() =>
        getTradeHistory({
          webhook: "https://your-webhook-url.com - not required",
          ident: "custom-ident-for-example-username-or-userid - not required",
          host: "your-host.com setting up under steamwebapi.com",
        })
      }
    >
      Get Trade History
    </button>
  );
}
```

### Pending Trade Sent

This function returns all the pending sent trades of the user.

```typescript
import { getSentPendingTrades } from "steamauth-extension";

export default function App() {
  return (
    <button
      onClick={() =>
        getSentPendingTrades({
          webhook: "https://your-webhook-url.com - not required",
          ident: "custom-ident-for-example-username-or-userid - not required",
          host: "your-host.com setting up under steamwebapi.com",
        })
      }
    >
      Get Pending Sent Trades
    </button>
  );
}
```

### Pending Trade Received

This function returns all the pending received trades of the user.

```typescript
import { getReceivedPendingTrades } from "steamauth-extension";

export default function App() {
  return (
    <button
      onClick={() =>
        getReceivedPendingTrades({
          webhook: "https://your-webhook-url.com - not required",
          ident: "custom-ident-for-example-username-or-userid - not required",
          host: "your-host.com setting up under steamwebapi.com",
        })
      }
    >
      Get Pending Received Trades
    </button>
  );
}
```

### Send Trade Offer

This function send Trade Offer to your users. Send an Item out or get an Item in.

```typescript
import { sendTradeOffer } from "steamauth-extension";

export default function App() {
  return (
    <button
      onClick={() =>
        sendTradeOffer({
          partneritemassetids: [],
          myitemassetids: ["36019072594"],
          tradeoffermessage: "tradeoffermessage",
          tradelink:
            "https://steamcommunity.com/tradeoffer/new/?partner=111290214&token=k1Ty4tEi",
          partnersteamid: "76561198071555942",
          message: "This is a test message",
          webhook: "https://your-webhook-url.com - not required",
          ident: "custom-ident-for-example-username-or-userid - not required",
          host: "your-host.com setting up under steamwebapi.com",
        })
      }
    >
      Send Trade Offer
    </button>
  );
}
```

## Props

| Name    |  Type  |                                        Description |
| :------ | :----: | -------------------------------------------------: |
| host    | string |  **Required**. The host url used by the extension. |
| ident   | string | **Optional**. The identifier that you want to use. |
| webhook | string |      **Optional**. The host url used by extension. |

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
