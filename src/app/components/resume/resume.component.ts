import { Component, OnInit } from '@angular/core';
import { EducationModel } from '../../models/education-model';
import { WorkExperinceModel } from '../../models/work-experince-model';
import { ComputerSkillModel } from '../../models/computer-skill-model';
import { ProjectModel } from '../../models/project-model';
import * as _ from 'lodash';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  mainComputerSkills = ['Angular 2+', 'ECMAScript 6', 'HTML', 'CSS', 'C#(Web API 2)', 'MS-SQL'];
  helperComputerSkills = ['Bootstrap', 'Angular Material', 'LINQ', 'Entity Framework','Postman' , 'Git', 'SourceTree', 'Jira'];

  educations = new Array<EducationModel>();
  workExperiences = new Array<WorkExperinceModel>();
  projects = new Array<ProjectModel>();

  educationModel = new EducationModel();
  workExperinceModel = new WorkExperinceModel();
  computerSkillModel = new ComputerSkillModel();
  projectModel = new ProjectModel();

  constructor() { }

  ngOnInit() {
    this.educationModel.city = 'İstanbul';
    this.educationModel.schoolName = 'DOGUS UNIVERSITY';
    this.educationModel.year = '2013 - 2018';
    this.educationModel.description = "Bachelor's Degree in Computer Engineering (Double Major)";

    this.educations.push(_.cloneDeep(this.educationModel));

    this.educationModel.city = 'İstanbul';
    this.educationModel.schoolName = 'DOGUS UNIVERSITY';
    this.educationModel.year = '2013 - 2018';
    this.educationModel.description = "Bachelor's Degree in  Electronics & Communication Engineering";

    this.educations.push(_.cloneDeep(this.educationModel));

    this.workExperinceModel.year = '2017 - NOW';
    this.workExperinceModel.city = 'İstanbul';
    this.workExperinceModel.companyName = 'TCM BİLİŞİM VE DANIŞMANLIK HİZMETLERİ A.Ş';
    this.workExperinceModel.description = "Software Developer - Real Estate Management Project for Rönesans Gayrimenkul Yatırım A.Ş";

    this.workExperiences.push(_.cloneDeep(this.workExperinceModel));

    this.workExperinceModel.year = '2017 - (1 Month)';
    this.workExperinceModel.city = 'İstanbul';
    this.workExperinceModel.companyName = 'TÜRK TELEKOMÜNİKASYON A.Ş';
    this.workExperinceModel.description = "Compulsory intern for Computer Engineering";

    this.workExperiences.push(_.cloneDeep(this.workExperinceModel));

    this.workExperinceModel.year = '2017 - (1 Month)';
    this.workExperinceModel.city = 'İstanbul';
    this.workExperinceModel.companyName = 'CEVİZ BİLGİ TEKNOLOJİLERİ';
    this.workExperinceModel.description = "Compulsory intern for Computer Engineering";

    this.workExperiences.push(_.cloneDeep(this.workExperinceModel));

    this.workExperinceModel.year = '2017 - (1 Month)';
    this.workExperinceModel.city = 'İstanbul';
    this.workExperinceModel.companyName = 'QUASYS BİLİŞİM TEKNOLOJİLERİ';
    this.workExperinceModel.description = "Compulsory intern for Computer Engineering";

    this.workExperiences.push(_.cloneDeep(this.workExperinceModel));

    this.computerSkillModel.mainSkills = this.mainComputerSkills;
    this.computerSkillModel.helperSkills = this.helperComputerSkills;

    this.projectModel.projectName = 'Real Estate Management Project for Rönesans Gayrimenkul Yatırım A.Ş';
    this.projectModel.usedTechnologies = 'Angular 2, Web API 2, MS-SQL, HTML, CSS, Bootstrap, Angular Material, Postman';
    this.projectModel.link = 'http://www.fatihkucuk.blog/dashboard/my-works';

    this.projects.push(_.cloneDeep(this.projectModel));

    this.projectModel.projectName = 'Single Page Social Web-Site for University Students (Graduation Project)';
    this.projectModel.usedTechnologies = 'Angular 2, Web API 2, MS-SQL, HTML, CSS, Bootstrap';
    this.projectModel.link = '';

    this.projects.push(_.cloneDeep(this.projectModel));

    this.projectModel.projectName = 'Voice Controlled Smart Car';
    this.projectModel.usedTechnologies = 'Arduino Uno';
    this.projectModel.link = 'https://www.youtube.com/watch?v=jgmUjGIblGQ';

    this.projects.push(_.cloneDeep(this.projectModel));

    this.projectModel.projectName = 'Light Sensitive LED Strip';
    this.projectModel.usedTechnologies = 'Arduino Uno';
    this.projectModel.link = 'https://www.youtube.com/watch?v=SzbzpB5rxJo';

    this.projects.push(_.cloneDeep(this.projectModel));

  }

}
