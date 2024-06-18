import { ServerListItem } from "../interfaces/server-list.interface"

export const SERVER_LISTS: ServerListItem []= [
  {
    "url": "https://does-not-work.perfume.new",
    "priority": 1
  },
  {
    "url": "https://gitlab.com",
    "priority": 4
  },
  {
    "url": "http://app.scnt.me",
    "priority": 3
  },
  {
    "url": "https://offline.scentronix.com",
    "priority": 2
  }
]

export const HTTP_RESPONSE = {
  INTERNAL_SERVER_ERROR: {
    code: 500,
    message: 'Internal Server Error'
  }
}