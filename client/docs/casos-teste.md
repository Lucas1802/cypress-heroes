# 📋 Casos de Teste – Aplicação Cypress Heroes

Este documento descreve os **casos de teste funcionais** elaborados para a aplicação **Cypress Heroes**, com base na exploração do sistema e no comportamento observado durante os testes manuais.

---

## 🧪 CT01 – Validar carregamento da página inicial

**Objetivo:**
Garantir que a página inicial da aplicação seja exibida corretamente.

**Pré-condições:**

* Aplicação em execução.

**Passos:**

1. Acessar a URL da aplicação.
2. Observar o conteúdo da página inicial.

**Resultado esperado:**
A página inicial deve ser carregada corretamente, exibindo a lista de heróis.

---

## 🧪 CT02 – Validar exibição da lista de heróis

**Objetivo:**
Garantir que os heróis sejam exibidos corretamente na página inicial.

**Pré-condições:**

* Aplicação em execução.

**Passos:**

1. Acessar a página inicial.
2. Verificar a exibição dos cards de heróis.

**Resultado esperado:**
Os cards de heróis devem ser exibidos contendo nome, atributos e botões de ação disponíveis.

---

## 🧪 CT03 – Validar acesso à funcionalidade “Conecte-se” - AUTOMATIZADO

**Objetivo:**
Verificar o comportamento do sistema ao acessar a opção de login.

**Pré-condições:**

* Usuário não autenticado.

**Passos:**

1. Acessar a página inicial.
2. Clicar no botão “Conecte-se”.

**Resultado esperado:**
O sistema deve exibir um formulário solicitando e-mail e senha.

---

## 🧪 CT04 – Validar tentativa de curtir herói sem autenticação - AUTOMATIZADO

**Objetivo:**
Verificar o comportamento do sistema ao tentar curtir um herói sem estar autenticado.

**Pré-condições:**

* Usuário não autenticado.

**Passos:**

1. Acessar a página inicial.
2. Selecionar um herói.
3. Clicar no botão “Curtir”.

**Resultado esperado:**
O sistema deve solicitar autenticação ou impedir a ação de curtir o herói.

**Resultado atual:**
O sistema solicita autenticação, porém não oferece opção de criação de conta ou credenciais de teste, impedindo a continuidade do fluxo.

---

## 🧪 CT05 – Validar tentativa de contratar herói sem autenticação

**Objetivo:**
Verificar o comportamento do sistema ao tentar contratar um herói sem estar autenticado.

**Pré-condições:**

* Usuário não autenticado.

**Passos:**

1. Acessar a página inicial.
2. Selecionar um herói.
3. Clicar no botão “Contratar”.

**Resultado esperado:**
O sistema deve solicitar autenticação para prosseguir.

**Resultado atual:**
O sistema solicita autenticação, porém não permite o login devido à inexistência de funcionalidade de cadastro ou credenciais de teste.

---

## 📌 Observações Gerais

* As funcionalidades **Curtir** e **Contratar** dependem de autenticação.
* A aplicação não disponibiliza criação de usuário nem credenciais de teste, o que impede a validação completa desses fluxos.
* Esses pontos foram considerados como **limitações funcionais** e oportunidades de melhoria.

---

## 💡 Sugestões de Melhoria

* Adicionar funcionalidade de **criação de usuário**.
* Disponibilizar **credenciais de teste** para fins de demonstração.
* Implementar um **modo demonstração** para usuários não autenticados.
* Exibir mensagens mais claras sobre a necessidade de autenticação.

---

## 🐞 Bug / Limitação técnica

**Título:**
* Aplicação não disponibiliza seletores estáveis para automação E2E

**Descrição:**
* Os elementos da interface não possuem atributos dedicados (ex: data-testid), o que dificulta a criação de testes automatizados estáveis.

**Impacto:**
* Testes E2E ficam mais frágeis e dependentes de texto ou estrutura do DOM.
