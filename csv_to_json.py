import csv
import json

def csv_to_json(input_file, output_file):
    # Abrir o arquivo CSV de entrada para leitura
    with open(input_file, 'r', encoding='utf-8') as csvfile:
        # Ler os dados CSV
        csvreader = csv.DictReader(csvfile, delimiter=';')
        
        # Inicializar uma lista para armazenar os objetos JSON
        data = []
        
        # Iterar sobre as linhas do arquivo CSV
        for row in csvreader:
            # Adicionar cada linha como um dicionário à lista de dados
            data.append(row)
    
    # Abrir o arquivo JSON de saída para escrita
    with open(output_file, 'w', encoding='utf-8') as jsonfile:
        # Escrever os dados como JSON no arquivo de saída
        json.dump(data, jsonfile, indent=4)

# Nome do arquivo CSV de entrada
input_file = 'contratos2024.csv'

# Nome do arquivo JSON de saída
output_file = 'contratos2024.json'

# Converter o arquivo CSV para JSON
csv_to_json(input_file, output_file)

print("Conversão concluída com sucesso!")