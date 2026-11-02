// Fictional names used only in explicitly labeled purchase simulations.
export const purchaseExamples = [
  "Maria Queiroz", "Ana Paula", "Juliana Martins", "Fernanda Silva", "Camila Souza",
  "Beatriz Oliveira", "Larissa Santos", "Patrícia Lima", "Adriana Costa", "Carla Ribeiro",
  "Amanda Pereira", "Bruna Almeida", "Daniela Ferreira", "Eduarda Gomes", "Fabiana Rocha",
  "Gabriela Alves", "Helena Barbosa", "Isabela Cardoso", "Joana Nunes", "Letícia Teixeira",
  "Luciana Mendes", "Mariana Azevedo", "Natália Moreira", "Priscila Dias", "Renata Castro",
  "Sabrina Fernandes", "Tatiana Correia", "Vanessa Carvalho", "Vitória Melo", "Aline Batista",
  "Andréia Duarte", "Bárbara Machado", "Bianca Freitas", "Cecília Monteiro", "Cláudia Pinto",
  "Cristiane Moura", "Débora Cavalcanti", "Denise Ramos", "Eliane Lopes", "Elisa Vieira",
  "Flávia Campos", "Gisele Borges", "Ingrid Santana", "Jéssica Cunha", "Joyce Farias",
  "Karina Rezende", "Kelly Marques", "Lívia Sales", "Lorena Araújo", "Luana Pires",
  "Márcia Peixoto", "Michele Tavares", "Mônica Xavier", "Nicole Brito", "Paola Coelho",
  "Raquel Assis", "Roberta Leal", "Sandra Aguiar", "Simone Amorim", "Sueli Viana",
  "Tânia Miranda", "Valéria Neves", "Viviane Guimarães", "Yasmin Dantas", "Alice Lacerda",
  "Alessandra Soares", "Antônia Siqueira", "Cíntia Albuquerque", "Daiane Braga", "Dalva Reis",
  "Diana Vasconcelos", "Elenice Paiva", "Emanuela Torres", "Estela Macedo", "Evelyn Brandão",
  "Francisca Bezerra", "Geovana Figueiredo", "Heloísa Fonseca", "Iara Cabral", "Ivone Bastos",
  "Jacqueline Moraes", "Janaina Sá", "Kátia Bernardes", "Lara Prado", "Leonor Mattos",
  "Lilian Coutinho", "Maitê Andrade", "Manuela Rios", "Marisa Valente", "Neide Furtado",
  "Noemi Martins", "Paloma Santiago", "Regina Cruz", "Rita Carvalho", "Rosana Muniz",
  "Silvana Portela", "Solange Barros", "Teresa Camargo", "Vera Lemos", "Zélia Antunes",
];

export function nextPurchaseExample(index: number) {
  return (index + 1) % purchaseExamples.length;
}