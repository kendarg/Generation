Algoritmo Descuentos
	Escribir  "Escribe el valor a cobrar"
	Leer n
	Si n > 500000 Entonces
		Escribir -0.15 * n + n " Valor a pagar"
	FinSi
	
	Si n >= 200000 O n = 500000
		Escribir -0.10 * n + n " Valor a pagar"
	SiNo
		Escribir n " No hay descuento"
	Fin Si
		
	
FinAlgoritmo
