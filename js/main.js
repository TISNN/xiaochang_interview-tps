document.addEventListener('DOMContentLoaded', () => {
    // 添加卡片悬停效果
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.transition = 'transform 0.3s ease';
            card.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        });
    });

    // 添加课程点击展开/收起效果
    const courseCategories = document.querySelectorAll('.course-category');
    courseCategories.forEach(category => {
        const heading = category.querySelector('h6');
        const ul = category.querySelector('ul');
        
        // 初始状态设置
        ul.style.maxHeight = ul.scrollHeight + 'px';
        ul.style.overflow = 'hidden';
        ul.style.transition = 'max-height 0.3s ease';
        
        heading.style.cursor = 'pointer';
        heading.addEventListener('click', () => {
            const isCollapsed = ul.style.maxHeight === '0px';
            
            if (isCollapsed) {
                ul.style.maxHeight = ul.scrollHeight + 'px';
                heading.style.color = '#3498db';
            } else {
                ul.style.maxHeight = '0px';
                heading.style.color = '#2c3e50';
            }
        });
    });

    // 添加平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 添加面试阶段的展开/收起效果
    const stages = document.querySelectorAll('.stage');
    stages.forEach(stage => {
        const heading = stage.querySelector('h5');
        const content = stage.querySelector('ul, .common-questions');
        
        // 初始状态设置
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.overflow = 'hidden';
        content.style.transition = 'max-height 0.3s ease';
        
        heading.style.cursor = 'pointer';
        heading.addEventListener('click', () => {
            const isCollapsed = content.style.maxHeight === '0px';
            
            if (isCollapsed) {
                content.style.maxHeight = content.scrollHeight + 'px';
                stage.style.backgroundColor = 'rgba(52, 152, 219, 0.05)';
            } else {
                content.style.maxHeight = '0px';
                stage.style.backgroundColor = 'transparent';
            }
        });

        // 添加悬停效果
        stage.addEventListener('mouseenter', () => {
            stage.style.transform = 'translateX(10px)';
            stage.style.transition = 'transform 0.3s ease';
        });

        stage.addEventListener('mouseleave', () => {
            stage.style.transform = 'translateX(0)';
        });
    });

    // 为常见问题添加高亮效果
    const questions = document.querySelectorAll('.common-questions li');
    questions.forEach(question => {
        question.addEventListener('mouseenter', () => {
            question.style.color = '#3498db';
            question.style.transition = 'color 0.3s ease';
        });

        question.addEventListener('mouseleave', () => {
            question.style.color = '';
        });
    });

    // 为回答策略点添加动画效果
    const strategyPoints = document.querySelectorAll('.strategy-point');
    strategyPoints.forEach(point => {
        point.addEventListener('mouseenter', () => {
            point.style.transform = 'translateY(-3px)';
            point.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            point.style.transition = 'all 0.3s ease';
            
            // 改变标题颜色
            const title = point.querySelector('h6');
            if (title) {
                title.style.color = '#2980b9';
            }
        });

        point.addEventListener('mouseleave', () => {
            point.style.transform = 'translateY(0)';
            point.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
            
            // 恢复标题颜色
            const title = point.querySelector('h6');
            if (title) {
                title.style.color = '';
            }
        });
    });

    // 为示例回答添加复制功能
    const quotes = document.querySelectorAll('.quote');
    quotes.forEach(quote => {
        quote.style.cursor = 'pointer';
        quote.title = '点击复制答案';
        
        quote.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(quote.textContent);
                
                // 显示复制成功提示
                const notification = document.createElement('div');
                notification.textContent = '已复制到剪贴板';
                notification.style.position = 'fixed';
                notification.style.bottom = '20px';
                notification.style.left = '50%';
                notification.style.transform = 'translateX(-50%)';
                notification.style.padding = '10px 20px';
                notification.style.backgroundColor = '#2ecc71';
                notification.style.color = 'white';
                notification.style.borderRadius = '5px';
                notification.style.zIndex = '1000';
                
                document.body.appendChild(notification);
                
                // 2秒后移除提示
                setTimeout(() => {
                    notification.remove();
                }, 2000);
            } catch (err) {
                console.error('复制失败:', err);
            }
        });
    });

    // 为注意事项添加交互效果
    const tipItems = document.querySelectorAll('.tip-item');
    tipItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-3px)';
            item.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            
            // 改变标题颜色
            const title = item.querySelector('h5');
            if (title) {
                title.style.color = '#3498db';
            }
            
            // 改变勾选图标颜色
            const checkmarks = item.querySelectorAll('li::before');
            checkmarks.forEach(mark => {
                mark.style.color = '#3498db';
            });
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
            item.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
            
            // 恢复标题颜色
            const title = item.querySelector('h5');
            if (title) {
                title.style.color = '';
            }
            
            // 恢复勾选图标颜色
            const checkmarks = item.querySelectorAll('li::before');
            checkmarks.forEach(mark => {
                mark.style.color = '';
            });
        });

        // 添加点击效果
        item.addEventListener('click', () => {
            // 创建波纹效果
            const ripple = document.createElement('div');
            ripple.className = 'ripple';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.backgroundColor = 'rgba(52, 152, 219, 0.2)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';

            // 设置波纹位置
            const rect = item.getBoundingClientRect();
            ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
            ripple.style.left = event.clientX - rect.left - ripple.offsetWidth / 2 + 'px';
            ripple.style.top = event.clientY - rect.top - ripple.offsetHeight / 2 + 'px';

            // 添加波纹元素
            item.style.position = 'relative';
            item.style.overflow = 'hidden';
            item.appendChild(ripple);

            // 移除波纹元素
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // 添加波纹动画样式
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // 为简历项目添加交互效果
    const resumeItems = document.querySelectorAll('.education-item, .experience-item, .project-item');
    resumeItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(10px)';
            item.style.backgroundColor = 'rgba(52, 152, 219, 0.1)';
            
            // 改变标题颜色
            const title = item.querySelector('h5');
            if (title) {
                title.style.color = '#3498db';
            }
            
            // 改变箭头颜色
            const arrows = item.querySelectorAll('li::before');
            arrows.forEach(arrow => {
                arrow.style.color = '#3498db';
            });
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
            item.style.backgroundColor = 'rgba(52, 152, 219, 0.05)';
            
            // 恢复标题颜色
            const title = item.querySelector('h5');
            if (title) {
                title.style.color = '';
            }
            
            // 恢复箭头颜色
            const arrows = item.querySelectorAll('li::before');
            arrows.forEach(arrow => {
                arrow.style.color = '';
            });
        });
    });

    // 为项目成就添加高亮效果
    const achievements = document.querySelectorAll('.project-achievement');
    achievements.forEach(achievement => {
        achievement.addEventListener('mouseenter', () => {
            achievement.style.color = '#2980b9';
            achievement.style.backgroundColor = 'rgba(52, 152, 219, 0.05)';
            achievement.style.padding = '10px';
            achievement.style.borderRadius = 'var(--border-radius)';
            achievement.style.transition = 'all 0.3s ease';
        });

        achievement.addEventListener('mouseleave', () => {
            achievement.style.color = '';
            achievement.style.backgroundColor = '';
            achievement.style.padding = '';
            achievement.style.borderRadius = '';
        });
    });

    // 为项目描述添加展开/收起效果
    const projectDescriptions = document.querySelectorAll('.project-description');
    projectDescriptions.forEach(description => {
        const originalText = description.textContent;
        const shortText = originalText.slice(0, 100) + (originalText.length > 100 ? '...' : '');
        
        if (originalText.length > 100) {
            description.textContent = shortText;
            description.style.cursor = 'pointer';
            
            let isExpanded = false;
            description.addEventListener('click', () => {
                isExpanded = !isExpanded;
                description.textContent = isExpanded ? originalText : shortText;
                description.style.color = isExpanded ? '#2c3e50' : '#666';
            });
        }
    });

    // 为写作要求项添加交互效果
    const requirementItems = document.querySelectorAll('.requirement-item');
    requirementItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(10px)';
            item.style.backgroundColor = 'rgba(52, 152, 219, 0.1)';
            item.style.transition = 'all 0.3s ease';
            
            // 改变标题颜色
            const title = item.querySelector('h5');
            if (title) {
                title.style.color = '#3498db';
            }
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
            item.style.backgroundColor = 'rgba(52, 152, 219, 0.05)';
            
            // 恢复标题颜色
            const title = item.querySelector('h5');
            if (title) {
                title.style.color = '';
            }
        });
    });

    // 为优点和改进建议添加交互效果
    const analysisPoints = document.querySelectorAll('.strength-points, .improvement-points');
    analysisPoints.forEach(point => {
        point.addEventListener('mouseenter', () => {
            point.style.transform = 'translateY(-5px)';
            point.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            point.style.transition = 'all 0.3s ease';
            
            // 改变标题颜色
            const title = point.querySelector('h6');
            if (title) {
                title.style.color = '#3498db';
            }
        });

        point.addEventListener('mouseleave', () => {
            point.style.transform = 'translateY(0)';
            point.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
            
            // 恢复标题颜色
            const title = point.querySelector('h6');
            if (title) {
                title.style.color = '';
            }
        });
    });

    // 为评分标准项添加交互效果
    const criteriaItems = document.querySelectorAll('.criteria-item');
    criteriaItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px)';
            item.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            
            // 改变标题颜色
            const title = item.querySelector('h5');
            if (title) {
                title.style.color = '#3498db';
            }
            
            // 改变百分比颜色
            const percentage = title.textContent.match(/\(\d+%\)/);
            if (percentage) {
                title.innerHTML = title.textContent.replace(
                    percentage[0],
                    `<span style="color: #3498db;">${percentage[0]}</span>`
                );
            }
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
            item.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
            
            // 恢复标题颜色
            const title = item.querySelector('h5');
            if (title) {
                title.style.color = '';
                // 恢复百分比颜色
                const percentage = title.innerHTML.match(/<span.*?>\(\d+%\)<\/span>/);
                if (percentage) {
                    title.innerHTML = title.innerHTML.replace(
                        percentage[0],
                        percentage[0].replace(/<[^>]+>/g, '')
                    );
                }
            }
        });

        // 添加点击效果
        item.addEventListener('click', () => {
            // 创建波纹效果
            const ripple = document.createElement('div');
            ripple.className = 'ripple';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.backgroundColor = 'rgba(52, 152, 219, 0.2)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';

            // 设置波纹位置
            const rect = item.getBoundingClientRect();
            ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
            ripple.style.left = event.clientX - rect.left - ripple.offsetWidth / 2 + 'px';
            ripple.style.top = event.clientY - rect.top - ripple.offsetHeight / 2 + 'px';

            // 添加波纹元素
            item.style.position = 'relative';
            item.style.overflow = 'hidden';
            item.appendChild(ripple);

            // 移除波纹元素
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // 为面试矩阵案例添加交互效果
    const caseItems = document.querySelectorAll('.case-item');
    caseItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px)';
            item.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            
            // 改变标题颜色
            const title = item.querySelector('h5');
            if (title) {
                title.style.color = '#3498db';
            }
            
            // 突出显示项目细节
            const details = item.querySelectorAll('.project-details li, .data-support li');
            details.forEach(detail => {
                detail.style.color = '#2c3e50';
                detail.style.transition = 'color 0.3s ease';
            });
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
            item.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
            
            // 恢复标题颜色
            const title = item.querySelector('h5');
            if (title) {
                title.style.color = '';
            }
            
            // 恢复项目细节样式
            const details = item.querySelectorAll('.project-details li, .data-support li');
            details.forEach(detail => {
                detail.style.color = '#666';
            });
        });
    });

    // 为矩阵表格行添加交互效果
    const matrixRows = document.querySelectorAll('.matrix-table tbody tr');
    matrixRows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.backgroundColor = 'rgba(52, 152, 219, 0.1)';
            row.style.transition = 'all 0.3s ease';
            
            // 突出显示单元格
            const cells = row.querySelectorAll('td');
            cells.forEach(cell => {
                cell.style.color = '#2c3e50';
                cell.style.fontWeight = '500';
            });
        });

        row.addEventListener('mouseleave', () => {
            row.style.backgroundColor = '';
            
            // 恢复单元格样式
            const cells = row.querySelectorAll('td');
            cells.forEach((cell, index) => {
                if (index >= 3) {
                    cell.style.color = '';
                    cell.style.fontWeight = '';
                }
            });
        });
    });

    // 为使用指南项添加交互效果
    const guideItems = document.querySelectorAll('.guide-item');
    guideItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(10px)';
            item.style.backgroundColor = 'rgba(52, 152, 219, 0.1)';
            item.style.transition = 'all 0.3s ease';
            
            // 改变标题颜色
            const title = item.querySelector('h5');
            if (title) {
                title.style.color = '#3498db';
            }
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
            item.style.backgroundColor = 'rgba(52, 152, 219, 0.05)';
            
            // 恢复标题颜色
            const title = item.querySelector('h5');
            if (title) {
                title.style.color = '';
            }
        });
    });

    // 为示例场景添加高亮效果
    const exampleScenario = document.querySelector('.example-scenario');
    if (exampleScenario) {
        exampleScenario.addEventListener('mouseenter', () => {
            exampleScenario.style.backgroundColor = 'rgba(52, 152, 219, 0.05)';
            exampleScenario.style.padding = '15px';
            exampleScenario.style.borderRadius = 'var(--border-radius)';
            exampleScenario.style.transition = 'all 0.3s ease';
            
            // 改变问题颜色
            const question = exampleScenario.querySelector('.question');
            if (question) {
                question.style.color = '#3498db';
            }
        });

        exampleScenario.addEventListener('mouseleave', () => {
            exampleScenario.style.backgroundColor = '';
            exampleScenario.style.padding = '';
            exampleScenario.style.borderRadius = '';
            
            // 恢复问题颜色
            const question = exampleScenario.querySelector('.question');
            if (question) {
                question.style.color = '';
            }
        });
    }

    // 为矩阵表格单元格添加详细交互效果
    const matrixCells = document.querySelectorAll('.matrix-table td');
    matrixCells.forEach(cell => {
        cell.addEventListener('mouseenter', () => {
            // 创建浮动信息框
            const tooltip = document.createElement('div');
            tooltip.className = 'matrix-tooltip';
            tooltip.style.position = 'absolute';
            tooltip.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
            tooltip.style.color = 'white';
            tooltip.style.padding = '10px 15px';
            tooltip.style.borderRadius = '6px';
            tooltip.style.fontSize = '14px';
            tooltip.style.zIndex = '1000';
            tooltip.style.maxWidth = '300px';
            tooltip.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            tooltip.style.transition = 'all 0.3s ease';

            // 根据单元格内容类型显示不同的详细信息
            if (cell.cellIndex === 0) { // 材料列
                tooltip.innerHTML = `
                    <strong>申请材料重点：</strong><br>
                    - 如何在材料中突出相关经验<br>
                    - 与课程的关联度<br>
                    - 可量化的成果展示
                `;
            } else if (cell.cellIndex === 1) { // 能力列
                tooltip.innerHTML = `
                    <strong>核心能力体现：</strong><br>
                    - 具体项目中的应用<br>
                    - 相关证书或认可<br>
                    - 未来发展潜力
                `;
            } else if (cell.cellIndex === 2) { // 课程列
                tooltip.innerHTML = `
                    <strong>课程匹配要点：</strong><br>
                    - 课程主要内容概述<br>
                    - 与个人经历的关联<br>
                    - 学习规划与目标
                `;
            }

            // 定位提示框
            const rect = cell.getBoundingClientRect();
            tooltip.style.left = rect.left + 'px';
            tooltip.style.top = (rect.bottom + 5) + 'px';

            // 添加到文档
            document.body.appendChild(tooltip);

            // 添加单元格高亮效果
            cell.style.backgroundColor = 'rgba(52, 152, 219, 0.15)';
            cell.style.transform = 'scale(1.02)';
            cell.style.transition = 'all 0.3s ease';

            // 鼠标离开时移除提示框和效果
            cell.addEventListener('mouseleave', () => {
                tooltip.remove();
                cell.style.backgroundColor = '';
                cell.style.transform = '';
            });
        });
    });

    // 为案例内容添加展开/收起功能
    const caseContents = document.querySelectorAll('.case-content');
    caseContents.forEach(content => {
        const toggleButton = document.createElement('button');
        toggleButton.textContent = '展开详情';
        toggleButton.style.padding = '5px 15px';
        toggleButton.style.margin = '10px 0';
        toggleButton.style.backgroundColor = '#3498db';
        toggleButton.style.color = 'white';
        toggleButton.style.border = 'none';
        toggleButton.style.borderRadius = '4px';
        toggleButton.style.cursor = 'pointer';
        toggleButton.style.transition = 'all 0.3s ease';

        let isExpanded = false;
        content.style.maxHeight = '100px';
        content.style.overflow = 'hidden';
        content.style.transition = 'max-height 0.3s ease';

        toggleButton.addEventListener('mouseenter', () => {
            toggleButton.style.backgroundColor = '#2980b9';
        });

        toggleButton.addEventListener('mouseleave', () => {
            toggleButton.style.backgroundColor = '#3498db';
        });

        toggleButton.addEventListener('click', () => {
            isExpanded = !isExpanded;
            content.style.maxHeight = isExpanded ? content.scrollHeight + 'px' : '100px';
            toggleButton.textContent = isExpanded ? '收起详情' : '展开详情';
        });

        content.parentNode.insertBefore(toggleButton, content.nextSibling);
    });

    // 为高频问题应答策略添加交互效果
    const frameworkPoints = document.querySelectorAll('.framework-points li');
    frameworkPoints.forEach(point => {
        point.addEventListener('mouseenter', () => {
            point.style.transform = 'translateX(10px)';
            point.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            
            // 改变关键词颜色
            const strong = point.querySelector('strong');
            if (strong) {
                strong.style.color = '#2980b9';
            }
        });

        point.addEventListener('mouseleave', () => {
            point.style.transform = 'translateX(0)';
            point.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
            
            // 恢复关键词颜色
            const strong = point.querySelector('strong');
            if (strong) {
                strong.style.color = '';
            }
        });
    });

    // 为模型步骤添加交互效果
    const modelSteps = document.querySelectorAll('.step');
    modelSteps.forEach((step, index) => {
        step.addEventListener('mouseenter', () => {
            step.style.transform = 'translateY(-3px)';
            step.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            
            // 添加进度指示
            const h6 = step.querySelector('h6');
            if (h6) {
                h6.style.color = '#2980b9';
                h6.style.fontWeight = '500';
            }
        });

        step.addEventListener('mouseleave', () => {
            step.style.transform = 'translateY(0)';
            step.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
            
            // 恢复进度指示
            const h6 = step.querySelector('h6');
            if (h6) {
                h6.style.color = '';
                h6.style.fontWeight = '';
            }
        });
    });

    // 为框架库项添加交互效果
    const frameworkItems = document.querySelectorAll('.framework-item');
    frameworkItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-3px)';
            item.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            
            // 改变标题和箭头颜色
            const title = item.querySelector('h5');
            const arrows = item.querySelectorAll('li::before');
            
            if (title) {
                title.style.color = '#3498db';
            }
            
            arrows.forEach(arrow => {
                arrow.style.color = '#3498db';
            });
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
            item.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
            
            // 恢复标题和箭头颜色
            const title = item.querySelector('h5');
            const arrows = item.querySelectorAll('li::before');
            
            if (title) {
                title.style.color = '';
            }
            
            arrows.forEach(arrow => {
                arrow.style.color = '';
            });
        });
    });
});
