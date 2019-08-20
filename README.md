# POC

Hilbert curve datastructure

Probale python first:
Maybe if i use it as a data structure java?
Stucture and values should be loke somethin:
Before transformation


1	4	13	16
2	3	14	15
5	8	9	12
6	7	10	11
After transormation final structure (2d)
1:4elem
1	4
2	3

2:16 elem
1	2	15	16
4	3	14	13
5	8	9	12
6	7	10	11

3:64 elem





How should i form the loop: 
(picture 2)
Loop1 0.0; 0.1; 1.1; 1.0;
Loop2 0.2; 0.3; 1.3; 1.2;  
Loop3 2.2; 2.3; 3.3; 3.2;
Loop4 2.0; 2.1; 3.1; 3.0;
And mirror the first and the last \ /

One or double loop

(picture 2)
So as a 1d it would look like 0.0; 0.1; 1.1; 1.0; 2.0; 3.0; 3.1; 2.1; 2.2; 3.2; 3.3; 2.3; 1.3; 1.2; 0.2; 0.3;


1.
fill up an array picture 1

2.
Convert fom 2D to a 1D structure

3.
Parse from 1D to 2D structure

4.
Fill up an array with the 2 picture and go on

5.
Draving out the point

<img src="hilbert curve.png" alt="hilbert curve"/>
