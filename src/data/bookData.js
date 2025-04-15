const bookData = [
  {
    "subject": "Artificial Intelligence",
    "parts": [
      {
        "name": "Computer Vision",
        "chapters": [
          {
            "name": "Linear Equations",
            "articles": [
              {
                "id": "01-solving-equations",
                "title": "01 Solving Equations",
                "content": []
              }
            ]
          }
        ]
      },
      {
        "name": "Hyperparameters",
        "chapters": [
          {
            "name": "Intro",
            "articles": [
              {
                "id": "introduction",
                "title": "Introduction",
                "content": [
                  {
                    "type": "Title",
                    "level": "1",
                    "text": "Parâmetros e Hiperparâmetros em Modelos de Aprendizado de máquina\n"
                  },
                  {
                    "type": "Text",
                    "text": "Dois conceitos fundamentais devem ser descorridos para melhor entendimento dos Hiperparâmetros: o que são e as diferenças entre parâmetros e Hiperparâmetros.\n"
                  },
                  {
                    "type": "Title",
                    "level": "2",
                    "text": "O que são Parâmetros?\n"
                  },
                  {
                    "type": "NestedList",
                    "items": [
                      "Modelos Lineares: por exemplo, na regressão linear, os parâmetros são os coeficientes (betas) que multiplicam cada variável explicativa. O objetivo do modelo é encontrar os valores de beta que minimizam a soma dos quadrados dos resíduos (diferença entre valor real e predito ao quadrado).",
                      "Árvores de Decisão: os parâmetros envolvem a escolha das variáveis de divisão, os pontos de corte e a estrutura da árvore em si. Cada nó representa uma pergunta binária, como \"o valor da variável x é maior que um certo limite?\". O modelo busca as divisões que minimizem métricas como a soma dos quadrados dos resíduos (em regressão) ou o índice de Gini/entropia (em classificação).",
                      "Redes Neurais: os parâmetros são os pesos (weights) atribuídos às conexões entre os neurônios. Cada neurônio realiza uma combinação linear das entradas (variáveis ou saídas de camadas anteriores), e o modelo ajusta os pesos para produzir boas previsões com base em uma função de perda."
                    ]
                  },
                  {
                    "type": "Text",
                    "text": "Parâmetros são os elementos que um algoritmo de aprendizado de máquina aprende durante o treinamento. Eles são parte integrante do próprio modelo e são ajustados de modo a minimizar uma função de perda, ou seja, uma medida do erro entre a previsão do modelo e o valor real.\n\n"
                  },
                  {
                    "type": "Title",
                    "level": "3",
                    "text": "O que são Hiperparâmetros?\n"
                  },
                  {
                    "type": "Text",
                    "text": "Ao contrário dos parâmetros, os hiperparâmetros são definidos antes do treinamento do modelo. Eles controlam aspectos externos ao processo de aprendizagem propriamente dito, como a capacidade do modelo, o ritmo de aprendizado, ou a estrutura do modelo.\n"
                  },
                  {
                    "type": "NestedList",
                    "items": [
                      "Controlar a complexidade do modelo, prevenindo o overfitting (quando o modelo aprende ruído em vez de padrão).",
                      "Ajudar na generalização, ou seja, garantir que o modelo se comporte bem em dados novos.",
                      "Controlar aspectos computacionais, como a velocidade de convergência."
                    ]
                  },
                  {
                    "type": "Title",
                    "level": "3",
                    "text": "Função dos hiperparâmetros:\n\n"
                  },
                  {
                    "type": "NestedList",
                    "items": [
                      "Regressão Linear Regularizada:",
                      [
                        "Ridge (L2) penaliza o quadrado dos coeficientes.",
                        "Lasso (L1) penaliza o valor absoluto dos coeficientes.",
                        "Ambos utilizam um hiperparâmetro lambda que regula o grau de penalização."
                      ],
                      "Árvores de Decisão:",
                      [
                        "Número de variáveis avaliadas por nó.",
                        "Profundidade máxima da árvore.",
                        "Número mínimo de amostras por divisão.",
                        "Métrica de qualidade do split (Gini, entropia etc.)."
                      ],
                      "Redes Neurais:",
                      [
                        "Número de camadas ocultas e número de neurônios por camada.",
                        "Função de ativação (ReLU, sigmoid, tanh etc.).",
                        "Taxa de dropout (para evitar overfitting).",
                        "Taxa de aprendizado e momentum no otimizador."
                      ],
                      "Random Forests e Gradient Boosting:",
                      [
                        "Número de estimadores (árvores).",
                        "Taxa de aprendizado (especialmente em boosting).",
                        "Parâmetros herdados de árvores de decisão."
                      ],
                      "K Vizinhos Mais Próximos (KNN):",
                      [
                        "Número de vizinhos a considerar (k)."
                      ],
                      "Máquinas de Vetores de Suporte (SVM):",
                      [
                        "Tipo de função kernel (linear, polinomial, radial etc.).",
                        "Parâmetros do kernel (como a largura do kernel radial)."
                      ]
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "Statistics",
        "chapters": [
          {
            "name": "Descriptive Statistics",
            "articles": [
              {
                "id": "01-mean-median-and-mode",
                "title": "01 Mean Median and Mode",
                "content": [
                  {
                    "type": "Title",
                    "level": "1",
                    "text": "Mean, Median and Mode\n"
                  },
                  {
                    "type": "Text",
                    "text": "Descriptive statistics are used to describe the basic features of the data in a study.\n\nNow we are going to study a bit more about anything, bla bla bla...\n"
                  },
                  {
                    "type": "Figure",
                    "src": "https://via.placeholder.com/400",
                    "alt": "Insane figure",
                    "caption": "This is an insane figure"
                  },
                  {
                    "type": "Notes",
                    "text": "Always check your data to avoid mistakes.\n",
                    "noteType": "tip"
                  },
                  {
                    "type": "Notes",
                    "text": "Be careful when calculating the mean of a dataset with outliers.\n",
                    "noteType": "warning"
                  },
                  {
                    "type": "Notes",
                    "text": "This method is crucial for advanced AI techniques.\n",
                    "noteType": "important"
                  },
                  {
                    "type": "Formulas",
                    "formula": "mean = \\frac{\\sum_{i=1}^{n} x_i}{n}",
                    "subtitle": "Mean formula"
                  }
                ]
              },
              {
                "id": "02-standard-deviation",
                "title": "02 Standard Deviation",
                "content": []
              }
            ]
          },
          {
            "name": "Inferential Statistics",
            "articles": [
              {
                "id": "01-hypothesis-testing",
                "title": "01 Hypothesis Testing",
                "content": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "subject": "Electronics",
    "parts": [
      {
        "name": "Circuit Analysis",
        "chapters": [
          {
            "name": "Electricity",
            "articles": [
              {
                "id": "0-introduction",
                "title": "0 Introduction",
                "content": [
                  {
                    "type": "Title",
                    "level": "1",
                    "text": "Introduction to Electricity\n"
                  },
                  {
                    "type": "Text",
                    "text": "This is a series of articles and content to try to turn it better.\n"
                  },
                  {
                    "type": "Formulas",
                    "formula": "V = RI",
                    "subtitle": "Ohm's Law"
                  },
                  {
                    "type": "Notes",
                    "text": "oiew\n",
                    "noteType": ":warning"
                  },
                  {
                    "type": "Text",
                    "text": "Este textinho é uma doideira insana. Bem louco, não?\n"
                  },
                  {
                    "type": "Notes",
                    "text": "Tipinho\n",
                    "noteType": ":tip"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

export default bookData;