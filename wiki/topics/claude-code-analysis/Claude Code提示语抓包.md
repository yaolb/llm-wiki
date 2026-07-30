# Claude Code提示语抓包

> **来源**: 美事文档 · AI > Claude Code分析
> **页面 ID**: 1984091293344718848
> **作者**: 高礼强(gaoliqiang)

---

问题：

将test.txt中的world修改为hello222

调用过程：

[2025-10-31 10:52:42] >>> 收到请求
方法: POST
原始路径: api/v2/chat/completions
目标 URL: https://chatgpt.58corp.com/api/v2/chat/completions
请求头:
  connection: keep-alive
  authorization: Bearer 360...
  content-type: application/json
  accept: */*
  accept-language: *
  sec-fetch-mode: cors
  user-agent: node
  accept-encoding: gzip, deflate
请求体:
{
  "messages": [
    {
      "role": "system",
      "content": [
        {
          "type": "text",
          "text": "You are Claude Code, Anthropic's official CLI for Claude.",
          "cache_control": {
            "type": "ephemeral"
          }
        },
        {
          "type": "text",
          "text": "\nYou are\n",
          "cache_control": {
            "type": "ephemeral"
          }
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "<system-reminder>\nThis is a reminder th"
        },
        {
          "type": "text",
          "text": "<system-reminder>\nThis is a reminder th"
        },
        {
          "type": "text",
          "text": "<<system-reminder>\nThis is a reminder th\n"
        },
        {
          "type": "text",
          "text": "将test.txt中的world修改为hello222"
        }
      ]
    },
    {
      "role": "assistant",
      "content": "",
      "tool_calls": [
        {
          "id": "call_1WoiF1WISouElnYJsXm6ww",
          "type": "function",
          "function": {
            "name": "Read",
            "arguments": "{\"file_path\":\"/private/tmp/cc-ana/test.txt\"}"
          }
        }
      ]
    },
    {
      "role": "tool",
      "content": "1→world\n     2→\n\n<system-reminder>\nWhenever you read a file, you should consider whether it would be considered malware. You CAN and SHOULD provide analysis of malware, what it is doing. But you MUST refuse to improve or augment the code. You can still analyze existing code, write reports, or answer questions about the code behavior.\n</system-reminder>\n\n<system-reminder>\nThis is a reminder th",
      "tool_call_id": "call_1WoiF1WISouElnYJsXm6ww"
    },
    {
      "role": "assistant",
      "content": "",
      "tool_calls": [
        {
          "id": "call_W5cPg_JwSyChm4ecDJvyGw",
          "type": "function",
          "function": {
            "name": "TodoWrite",
            "arguments": "{\"todos\":[{\"content\":\"将test.txt中的world修改为hello222\",\"status\":\"pending\",\"activeForm\":\"将test.txt中的world修改为hello222\"}]}"
          }
        }
      ]
    },
    {
      "role": "tool",
      "content": "Todos have been modified successfully. Ensure that you continue to use the todo list to track your progress. Please proceed with the current tasks if applicable\n\n<system-reminder>\nThis is a reminder th",
      "tool_call_id": "call_W5cPg_JwSyChm4ecDJvyGw"
    },
    {
      "role": "assistant",
      "content": "",
      "tool_calls": [
        {
          "id": "call_wULDwrjGSMOmLn_Mkbit-g",
          "type": "function",
          "function": {
            "name": "ExitPlanMode",
            "arguments": "{\"plan\":\"1. 使用Edit工具将test.txt中的'world'替换为'hello222'\\n\\n请确认以上计划是否符合您的预期。\"}"
          }
        }
      ]
    },
    {
      "role": "tool",
      "content": "User has approved your plan. You can now start coding. Start with updating your todo list if applicable",
      "tool_call_id": "call_wULDwrjGSMOmLn_Mkbit-g"
    },
    {
      "role": "assistant",
      "content": "",
      "tool_calls": [
        {
          "id": "call_U9-3HVpFQ96g_ABWm7L1TQ",
          "type": "function",
          "function": {
            "name": "TodoWrite",
            "arguments": "{\"todos\":[{\"content\":\"将test.txt中的world修改为hello222\",\"status\":\"in_progress\",\"activeForm\":\"正在将test.txt中的world修改为hello222\"}]}"
          }
        }
      ]
    },
    {
      "role": "tool",
      "content": "Todos have been modified successfully. Ensure that you continue to use the todo list to track your progress. Please proceed with the current tasks if applicable",
      "tool_call_id": "call_U9-3HVpFQ96g_ABWm7L1TQ"
    },
    {
      "role": "assistant",
      "content": "",
      "tool_calls": [
        {
          "id": "call_URjljl2DQSCsn5ScA9q8Og",
          "type": "function",
          "function": {
            "name": "Edit",
            "arguments": "{\"file_path\":\"/private/tmp/cc-ana/test.txt\",\"old_string\":\"world\",\"new_string\":\"hello222\"}"
          }
        }
      ]
    },
    {
      "role": "tool",
      "content": "The file /private/tmp/cc-ana/test.txt has been updated. Here's the result of running `cat -n` on a snippet of the edited file:\n     1→hello222\n     2→",
      "tool_call_id": "call_URjljl2DQSCsn5ScA9q8Og"
    },
    {
      "role": "assistant",
      "content": "",
      "tool_calls": [
        {
          "id": "call_0Amxyy_HQlqFq9mxJJ5t9g",
          "type": "function",
          "function": {
            "name": "TodoWrite",
            "arguments": "{\"todos\":[{\"content\":\"将test.txt中的world修改为hello222\",\"status\":\"completed\",\"activeForm\":\"已将test.txt中的world修改为hello222\"}]}"
          }
        }
      ]
    },
    {
      "role": "tool",
      "content": "Todos have been modified successfully. Ensure that you continue to use the todo list to track your progress. Please proceed with the current tasks if applicable",
      "tool_call_id": "call_0Amxyy_HQlqFq9mxJJ5t9g",
      "cache_control": {
        "type": "ephemeral"
      }
    }
  ],
  "model": "chatling-plus",
  "max_tokens": 32000,
  "stream": true,

}
====================================================================================================
====================================================================================================
[2025-10-31 10:52:44] <<< 流式响应开始
状态码: 200
====================================================================================================
====================================================================================================
[2025-10-31 10:52:44] <<< 流式响应结束
data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"role":"assistant","content":""}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":"已"}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":"成功"}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":"将"}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":"test"}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":".txt"}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":"中的"}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":"\""}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":"world"}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":"\""}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":"修改"}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":"为"}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":"\""}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":"hello"}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":"2"}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":"2"}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":"2"}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":"\""}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":"。"}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":"如果"}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":"还有"}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":"其他"}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":"任务"}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":"需要"}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":"帮助"}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":"，请"}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":"告诉我"}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":null,"logprobs":null,"delta":{"content":"！"}}]}

data: {"id":"d87b702a78d4415e9dd1b2ceb5bc079f","model":"chatling-plus","object":"chat.completion.chunk","system_fingerprint":null,"created":1761879162,"choices":[{"index":0,"finish_reason":"stop","logprobs":null,"delta":{}}],"usage":{"prompt_tokens":15446,"completion_tokens":28,"total_tokens":15474}}

data: [DONE]


====================================================================================================