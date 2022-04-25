-- CREATE TABLE DEPARTMENT
-- (
--    DEPTCODE   SERIAL PRIMARY KEY,
--    DeptName   CHAR(30),
--    LOCATION   VARCHAR(33)
-- );

-- CREATE TABLE EMPLOYEE
-- (
--    EmpCode      INTEGER PRIMARY KEY,
--    EmpFName     VARCHAR(15),
--    EmpLName     VARCHAR(15),
--    Job          VARCHAR(45),
--    Manager      CHAR(4),
--    HireDate     DATE,
--    Salary       INTEGER,
--    Commission   INTEGER,
--    Department_code     INTEGER
-- );

-- CREATE SEQUENCE mysequence
-- INCREMENT 10
-- START 10
-- OWNED BY DEPARTMENT.DEPTCODE;

-- ALTER TABLE EMPLOYEE ADD CONSTRAINT Department_code FOREIGN KEY (Department_code) REFERENCES DEPARTMENT(DEPTCODE);

-- ALTER TABLE EMPLOYEE ALTER COLUMN Salary TYPE DECIMAL;

-- ALTER TABLE EMPLOYEE ALTER COLUMN salary SET DEFAULT 0;

-- ALTER TABLE EMPLOYEE ALTER COLUMN EmpFName SET NOT NULL;
-- ALTER TABLE EMPLOYEE ALTER COLUMN EmpLName SET NOT NULL;
-- ALTER TABLE DEPARTMENT ADD CONSTRAINT unique_location UNIQUE(LOCATION);

-- INSERT INTO DEPARTMENT (DeptName,LOCATION) VALUES 
-- ('FINANCE', 'EDINBURGH'),
-- ('SOFTWARE','PADDINGTON'),
-- ('SALES', 'MAIDSTONE'),
-- ('MARKETING', 'DARLINGTON'),
-- ('ADMIN', 'BIRMINGHAM');

-- UPDATE DEPARTMENT SET deptcode = deptcode * 10;
-- ALTER TABLE department ALTER COLUMN deptcode SET DEFAULT nextval('mysequence');
-- ALTER SEQUENCE mysequence RESTART WITH 60;

-- INSERT INTO DEPARTMENT (DeptName,LOCATION) VALUES 
-- ('TEST', 'TESTBURGH');

-- INSERT INTO EMPLOYEE (EmpCode,EmpFName,EmpLName,Job,Manager,HireDate,Salary,Commission,Department_code)
-- VALUES (9369, 'TONY', 'STARK', 'SOFTWARE ENGINEER', 7902, '1980-12-17', 2800,0,20),
--        (9499, 'TIM', 'ADOLF', 'SALESMAN', 7698, '1981-02-20', 1600, 300,30),    
--        (9566, 'KIM', 'JARVIS', 'MANAGER', 7839, '1981-04-02', 3570,0,20),
--        (9654, 'SAM', 'MILES', 'SALESMAN', 7698, '1981-09-28', 1250, 1400, 30),
--        (9782, 'KEVIN', 'HILL', 'MANAGER', 7839, '1981-06-09', 2940,0,10),
--        (9788, 'CONNIE', 'SMITH', 'ANALYST', 7566, '1982-12-09', 3000,0,20),
--        (9839, 'ALFRED', 'KINSLEY', 'PRESIDENT', 7566, '1981-11-17', 5000,0, 10),
--        (9844, 'PAUL', 'TIMOTHY', 'SALESMAN', 7698, '1981-09-08', 1500,0,30),
--        (9876, 'JOHN', 'ASGHAR', 'SOFTWARE ENGINEER', 7788, '1983-01-12',3100,0,20),
--        (9900, 'ROSE', 'SUMMERS', 'TECHNICAL LEAD', 7698, '1981-12-03', 2950,0, 20),
--        (9902, 'ANDREW', 'FAULKNER', 'ANALYST', 7566, '1981-12-03', 3000,0, 10),
--        (9934, 'KAREN', 'MATTHEWS', 'SOFTWARE ENGINEER', 7782, '1982-01-23', 3300,0,20),
--        (9591, 'WENDY', 'SHAWN', 'SALESMAN', 7698, '1981-02-22', 500,0,30),
--        (9698, 'BELLA', 'SWAN', 'MANAGER', 7839, '1981-05-01', 3420, 0,30),
--        (9777, 'MADII', 'HIMBURY', 'ANALYST', 7839, '1981-05-01', 2000, 200, NULL),
--        (9860, 'ATHENA', 'WILSON', 'ANALYST', 7839, '1992-06-21', 7000, 100, 50),
--        (9861, 'JENNIFER', 'HUETTE', 'ANALYST', 7839, '1996-07-01', 5000, 100, 50);

-- 1. How many employees are in dept 10.
-- SELECT COUNT(*) FROM EMPLOYEE WHERE Department_code=10;

-- 2. How many employees are analyst in dept 10.
-- SELECT COUNT(*) FROM EMPLOYEE WHERE Department_code=10 AND Job='ANALYST';

-- 3. Display the names of each employees, their job and dept location
-- SELECT EmpFName, EmpLName, Job, LOCATION FROM EMPLOYEE INNER JOIN DEPARTMENT ON Department_code = DEPTCODE;

-- 4. Find the avg salary of the software engineers
-- SELECT ROUND(AVG(salary),2) AS SW_ENG_AVG FROM employee WHERE job='SOFTWARE ENGINEER';

-- 5. Which join should we use to display the employee 9777 even if he has no deptcode?
-- LEFT OUTER JOIN

-- 6. Create a query that displays EMPFNAME, EMPLNAME, Department_code, DEPTNAME, LOCATION from EMPLOYEE, and DEPARTMENT tables. Make sure the results are in the ascending order based on the EMPFNAME and LOCATION of the department.
-- SELECT EmpFName, EmpLName, Department_code, DEPTNAME, LOCATION FROM EMPLOYEE INNER JOIN DEPARTMENT ON Department_code = DEPTCODE ORDER BY EmpFName,LOCATION ASC;

-- 7.  Display EMPFNAME and "TOTAL SALARY" for each employee (commission and salary)
-- SELECT EmpFName, SUM(salary+commission) AS total_salary FROM employee GROUP BY EmpFName;

-- 8. Display MAX SALARY from the EMPLOYEE table.
-- SELECT MAX(salary) AS MAX_SALARY FROM employee;
