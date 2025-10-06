# 🚀 Sistema de Delivery Online

**Arquitetura:** Feature-Based Architecture  
**Objetivo:** Plataforma de delivery modular e escalável

---

## 🌳 Estrutura Visual do Projeto

```
src/
├── shared/                        ── Camada compartilhada (UI, hooks, context, types)
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Modal.tsx
│   │   ├── Header.tsx
│   │   └── Sidebar.tsx
│   ├── context/
│   │   └── auth-context.tsx
│   ├── hooks/
│   │   ├── useMobile.ts
│   │   └── useDebounce.ts
│   ├── lib/
│   │   └── api.ts
│   └── types/
│       └── index.d.ts
│
├── features/                       ── Funcionalidades (cada pasta é autocontida)
│   ├── dashboard/
│   │   ├── home/page.tsx
│   │   ├── overview/page.tsx
│   │   ├── analytics/page.tsx
│   │   └── reports/page.tsx
│   │
│   ├── orders/
│   │   ├── active/page.tsx
│   │   ├── history/page.tsx
│   │   └── cancelled/page.tsx
│   │
│   ├── menu/
│   │   ├── products/page.tsx
│   │   ├── combos/page.tsx
│   │   └── categories/pages/categories.tsx
│   │
│   ├── customers/
│   │   ├── loyalty/page.tsx
│   │   └── feedbacks/page.tsx
│   │
│   ├── drivers/
│   │   └── reports/page.tsx
│   │
│   ├── finance/
│   │   ├── payments/page.tsx
│   │   ├── invoices/page.tsx
│   │   └── fees/page.tsx
│   │
│   └── settings/
│       ├── store/page.tsx
│       ├── hours/page.tsx
│       ├── integrations/page.tsx
│       └── team/page.tsx
│
├── components/                     ── Componentes auxiliares
│   ├── auth/
│   │   ├── sign-in.tsx
│   │   └── sign-up.tsx
│   ├── app-sidebar.tsx
│   ├── search-form.tsx
│   └── theme-provider.tsx
│
├── hooks/                           ── Hooks globais adicionais
├── lib/                             ── Helpers e serviços globais
├── types/                           ── Tipos globais
├── App.tsx
├── main.tsx
└── App.css
```

---

# Fluxo de Dependência das Features

```
Components
Hooks
Services
API
```

## 🧱 Descrição das Camadas

| Camada                | Responsabilidade                                                                                                                          | Exemplos                                                         |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| **Components**        | Camada de interface. Responsável por renderizar os elementos visuais e interagir com o usuário.                                           | Formulários, tabelas, modais, botões, dashboards.                |
| **Hooks**             | Controla a lógica de estado e efeitos colaterais (side effects) da feature. Usa **React Query** e **React Hook Form** para gerenciamento. | `useGetOrders`, `usePostCategory`, `useAuth`.                    |
| **Services**          | Centraliza regras de negócio da feature e abstrai chamadas à API.                                                                         | Funções como `createOrderService()` ou `getCategoriesService()`. |
| **API**               | Ponto de comunicação com o backend (**NestJS**). Define endpoints, headers, autenticação e manipulação de respostas.                      | Funções de `fetch`, `axios`, ou wrappers com `react-query`.      |
```

---

## 🧩 Features

```

Dashboard ── home | overview | analytics | reports
Orders ── active | history | cancelled
Menu ── products | combos | categories
Customers ── loyalty | feedbacks
Drivers ── reports
Finance ── payments | invoices | fees
Settings ── store | hours | integrations | team
Auth ── sign-in | sign-up

```

---

## 🔹 Camada Shared

- **UI Components:** Button, Modal, Header, Sidebar
- **Contextos:** auth-context
- **Hooks:** useMobile, useDebounce
- **Lib/Helpers:** api.ts
- **Tipos globais:** index.d.ts

---

## ✅ Resumo Técnico

- **Arquitetura:** Feature-Based Architecture
- **Domínio:** Delivery Online
- **Foco:** Pedidos, Cardápio, Clientes, Entregadores, Financeiro e Configurações
- **Pontos Fortes:** Modularidade, Escalabilidade, Facilidade de manutenção
```
