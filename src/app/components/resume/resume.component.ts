import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { EducationModel } from "../../models/education-model";
import { WorkExperinceModel } from "../../models/work-experince-model";
import { ComputerSkillModel } from "../../models/computer-skill-model";
import { ProjectModel } from "../../models/project-model";
import * as _ from "lodash";
import { Router } from "@angular/router";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.css"]
})
export class ResumeComponent implements OnInit {
  mainComputerSkills = [
    "Javascript",
    "Typescript",
    "ES6",
    "Vue.js",
    "Angular 2+",
    "HTML",
    "CSS",
    "Sass",
    "Bootstrap",
    "Angular Material",
    "GraphQL",
    "Functional Programming",
    "JAVA-Spring Boot",
    "OOP",
    "Microservice Architecture",
    "Postman",
    "Git",
    "SourceTree"
  ];

  educations = new Array<EducationModel>();
  workExperiences = new Array<WorkExperinceModel>();
  projects = new Array<ProjectModel>();

  educationModel = new EducationModel();
  workExperinceModel = new WorkExperinceModel();
  computerSkillModel = new ComputerSkillModel();
  projectModel = new ProjectModel();

  constructor(private router: Router) {}

  ngOnInit() {
    this.educationModel.city = "İstanbul";
    this.educationModel.schoolName = "DOGUS UNIVERSITY";
    this.educationModel.year = "2013 - 2018";
    this.educationModel.description =
      "Bachelor's Degree in Computer Engineering (Double Major)";

    this.educations.push(_.cloneDeep(this.educationModel));

    this.educationModel.city = "İstanbul";
    this.educationModel.schoolName = "DOGUS UNIVERSITY";
    this.educationModel.year = "2013 - 2018";
    this.educationModel.description =
      "Bachelor's Degree in  Electronics & Communication Engineering";

    this.educations.push(_.cloneDeep(this.educationModel));

    this.workExperinceModel.year = "2019 - Present";
    this.workExperinceModel.city = "İstanbul";
    this.workExperinceModel.companyName = "HUAWEI Turkey R & D Center";
    this.workExperinceModel.description =
      "Frontend Developer - Internal project for Huawei employees.";

    this.workExperiences.push(_.cloneDeep(this.workExperinceModel));

    this.workExperinceModel.year = "2017 - 2019";
    this.workExperinceModel.city = "İstanbul";
    this.workExperinceModel.companyName =
      "TCM BİLİŞİM VE DANIŞMANLIK HİZMETLERİ A.Ş";
    this.workExperinceModel.description =
      "Software Developer - Real Estate Management Project for Rönesans Gayrimenkul Yatırım A.Ş";

    this.workExperiences.push(_.cloneDeep(this.workExperinceModel));

    this.workExperinceModel.year = "2017 - (1 Month)";
    this.workExperinceModel.city = "İstanbul";
    this.workExperinceModel.companyName = "TÜRK TELEKOMÜNİKASYON A.Ş";
    this.workExperinceModel.description =
      "Compulsory intern for Computer Engineering";

    this.workExperiences.push(_.cloneDeep(this.workExperinceModel));

    this.workExperinceModel.year = "2017 - (1 Month)";
    this.workExperinceModel.city = "İstanbul";
    this.workExperinceModel.companyName = "CEVİZ BİLGİ TEKNOLOJİLERİ";
    this.workExperinceModel.description =
      "Compulsory intern for Computer Engineering";

    this.workExperiences.push(_.cloneDeep(this.workExperinceModel));

    this.workExperinceModel.year = "2017 - (1 Month)";
    this.workExperinceModel.city = "İstanbul";
    this.workExperinceModel.companyName = "QUASYS BİLİŞİM TEKNOLOJİLERİ";
    this.workExperinceModel.description =
      "Compulsory intern for Computer Engineering";

    this.workExperiences.push(_.cloneDeep(this.workExperinceModel));

    this.computerSkillModel.mainSkills = this.mainComputerSkills;

    this.projectModel.projectName = "Huawei ISDP Workorder project";
    this.projectModel.usedTechnologies = "Vue.js, Aurora UI, JAVA-Spring Boot";
    this.projectModel.link = "http://www.fatihkucuk.blog/dashboard/my-works";
    this.projectModel.hasOutsourceLink = false;

    this.projects.push(_.cloneDeep(this.projectModel));

    this.projectModel.projectName =
      "Real Estate Management Project for Rönesans Gayrimenkul Yatırım A.Ş";
    this.projectModel.usedTechnologies =
      "Angular 2, Bootstrap, Angular Material, .NET C# Web API 2, MS-SQL";
    this.projectModel.link = "http://www.fatihkucuk.blog/dashboard/my-works";
    this.projectModel.hasOutsourceLink = false;

    this.projects.push(_.cloneDeep(this.projectModel));

    this.projectModel.projectName = "Aksadar Denizcilik A.Ş";
    this.projectModel.usedTechnologies =
      "Angular 6, Bootstrap, .NET C# Web API 2";
    this.projectModel.link = "https://www.aksadar.com/";
    this.projectModel.hasOutsourceLink = true;

    this.projects.push(_.cloneDeep(this.projectModel));

    this.projectModel.projectName =
      "Single Page Social Web-Site for University Students (Graduation Project)";
    this.projectModel.usedTechnologies =
      "Angular 2, Web API 2, MS-SQL, HTML, CSS, Bootstrap";
    this.projectModel.link = "";

    this.projects.push(_.cloneDeep(this.projectModel));

    this.projectModel.projectName = "Voice Controlled Smart Car";
    this.projectModel.usedTechnologies = "Arduino Uno";
    this.projectModel.link = "https://www.youtube.com/watch?v=jgmUjGIblGQ";
    this.projectModel.hasOutsourceLink = true;

    this.projects.push(_.cloneDeep(this.projectModel));

    this.projectModel.projectName = "Light Sensitive LED Strip";
    this.projectModel.usedTechnologies = "Arduino Uno";
    this.projectModel.link = "https://www.youtube.com/watch?v=SzbzpB5rxJo";
    this.projectModel.hasOutsourceLink = true;

    this.projects.push(_.cloneDeep(this.projectModel));
  }
}
